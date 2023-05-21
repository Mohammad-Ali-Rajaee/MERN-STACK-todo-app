const mongoose = require("mongoose");
const todoModel = require("../model/todoModel");
require("dotenv").config();
const jwt_decoder = require("jwt-decode");
const userModel = require("../model/userModel");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    const decoded = jwt_decoder(token);
    const user = await userModel.findOne({ email: decoded.email });
    console.log(user);
    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (err) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await todoModel
      .find({ user: req.user._id })
      .populate("user");
    if (!allTodos) {
      res.status(404).send("No document");
      return;
    }
    res.status(200).json(allTodos);
  } catch (message) {
    console.log(message);
    res.status(500).json(message);
  }
};

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, complete } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such document." });
  }
  try {
    const todo = await todoModel.findByIdAndUpdate(
      id,
      { title, complete },
      { new: true }
    );
    todo
      ? res.status(200).send(todo)
      : res.status(400).json({ error: "No such document." });
  } catch (message) {
    console.log(message);
    res.status(500).json(message);
  }
};

const addTodo = async (req, res) => {
  try {
    const { title, complete } = req.body;
    const todo = new todoModel({
      title,
      complete,
      user: req.user._id, // Set the user field to the authenticated user's ID
    });
    await todo.save();
    res.status(201).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such document." });
  }

  try {
    const todo = await todoModel.findByIdAndDelete(id, { new: false });
    console.log(todo);
    todo
      ? res.status(200).json(todo)
      : res.status(404).json({ error: "No such document." });
  } catch (message) {
    console.log(message);
    res.status(500).json(message);
  }
};

const getTodoById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such document." });
  }
  try {
    const result = await todoModel.findById(id);
    result
      ? res.status(200).json(result)
      : res.status(404).json({ error: "No such document." });
  } catch ({ message }) {
    console.log(message);
    res.status(500).json(message);
  }
};

module.exports = {
  getAllTodos,
  deleteTodo,
  updateTodo,
  addTodo,
  getTodoById,
  auth,
};
