const User = require("../model/userModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const jwt_decoder = require("jwt-decode");

const validation = require("../helper/validation");

const register = async (req, res) => {
  try {
    const { error } = validation.registerSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      res.status(400).json({
        status: 400,
        message: "INPUT_ERRORS",
        errors: error,
        original: error._original,
      });
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        emailConfirmed: false,
        emailToken: uuidv4(),
      });
      await user.save();

      const accessToken = jwt.sign(
        {
          _id: user.id,
          email: user.email,
        },
        process.env.SECRET_ACCESS_TOKEN,
        {
          expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
        }
      );
      //send email confirmation
      await sendEmailConfirmation({
        name: user.name,
        email: user.email,
        emailToken: user.emailToken,
      });

      res
        .status(200)
        .header()
        .json({
          status: 200,
          message: "REGISTER_SUCCESS",
          accessToken: accessToken,
          emailToken: user.emailToken,
          user: {
            name: user.name,
            id: user.id,
            email: user.email,
          },
        });
    }
  } catch (err) {
    let errorMessage;
    if (err.keyPattern.email === 1) {
      errorMessage = "EMAIL_EXISTS";
    } else {
      errorMessage = err;
    }
    res.status(400).json({
      status: 400,
      message: errorMessage,
    });
  }
};

const login = async (req, res) => {
  try {
    const { error } = validation.loginSchema.validate(req.body);
    if (error) {
      res.status(400).json({
        status: 400,
        message: "INPUT_ERRORS",
        error: error.details,
        original: error._original,
      });
    } else {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const validatePassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (validatePassword) {
          const accessToken = jwt.sign(
            {
              _id: user.id,
              email: user.email,
            },
            process.env.SECRET_ACCESS_TOKEN,
            {
              expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
            }
          );
          res.status(200).json({
            status: 200,
            message: "LOGIN_SECCESS",
            accessToken: accessToken,
          });
        } else {
          res.status(403).json({ status: 403, message: "INVALID_PASSWORD" });
        }
      } else {
        res.status(403).json({ status: 403, message: "INVALID_CREDENTIAL" });
      }
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: "BAD_REQUSET",
    });
  }
};

const confirmEmailToken = async (req, res) => {
  try {
    const emailToken = req.params.emailToken;

    if (emailToken !== null) {
      // const accessToken = req.header("Authorization").split(" ")[1];
      // const decodeAccessToken = jwt_decoder(accessToken);
      // const user = await User.findOne({ email: decodeAccessToken.email });
      const user = await User.findOne({ emailToken: emailToken });
      if (!user.emailConfirmed) {
        // testing------------------
        const temp = await User.updateOne(
          { email: user.email },
          {
            $set: {
              emailConfirmed: true,
            },
          }
        );
        res
          .status(200)
          .json({
            success: { status: 200, message: "EMAIL_CONFIRMED" },
          })
          .send("Redirecting to Login page ... ")
          .redirect("/login");
      } else {
        res
          .status(401)
          .json({ error: { status: 401, message: "EMAIL_ALREADY_CONFIRMED" } });
      }
    } else {
      res.status(400).json({ error: { status: 400, message: "BAD_REQUEST" } });
    }
  } catch (err) {
    res.status(400).json({ error: { status: 400, message: "BAD_REQUEST" } });
  }
};

const sendEmailConfirmation = async (user) => {
  const transport = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    port: process.env.NODEMAILER_PORT,
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });

  const info = await transport.sendMail({
    from: '"Todo App" <noreply@coursetest.com>',
    to: user.email,
    subject: "Confirm Your Email",
    text: `Hi ${user.name} ------------ Click the link below to confirm your email address: http://localhost:3000/api/auth/confirm-email/${user.emailToken}`,
    html: `<p>Hi ${user.name} ... Click the link below to confirm your email address:</p><a href="http://localhost:3000/api/auth/confirm-email/${user.emailToken}">Confirmation Link</a>`,
  });
};

module.exports = {
  register,
  confirmEmailToken,
  login,
};
