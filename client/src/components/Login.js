import { Eye, EyeDisable, Lock, Mail } from "react-huge-icons/outline";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginHandler } from "../Api/apiHandler";

const Login = () => {
  const navigator = useNavigate();
  const [isPass, setIsPass] = useState(true);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const PasswordToggler = (event) => {
    event.preventDefault();
    setIsPass((isPass) => !isPass);
  };

  const changeHandler = (setState) => (event) => {
    setState(event.target.value);
  };

  const handleSubmit = async (event) => {
    setIsLoading(true);
    setStatus(null);
    event.preventDefault();

    const response = await loginHandler({
      email: email,
      password: password,
    });
    if (response.status === 200) {
      const accessToken = response.accessToken;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("isLoggedIn", true);
      navigator("/app/todos/home");
    }
    console.log(response);
    setIsLoading(false);
    setStatus(response);
  };

  return (
    <main className="p-main__contaiener login relative">
      {isLoading && (
        <div
          role="status"
          className="absolute top-10 left-0 right-0 flex justify-center my-8"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <div className="inner-container flex flex-col gap-10 items-center justify-center w-full h-screen mx-auto">
        <div className="header max-w-lg w-full flex flex-col gap-1 justify-start">
          <h2 className="text-3xl text-primary font-medium">Login Page!</h2>
          <p className="text-primary text-lg">
            Enter your credentials to continue.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="middle flex flex-col gap-2 max-w-lg w-1/2 items-center"
        >
          <span className="border bg-grayInput rounded-lg w-full px-4 flex justify-between items-center gap-2 text-gray-500">
            <label htmlFor="email">
              <Mail />
            </label>
            <input
              className="w-full focus:outline-none bg-inherit py-2"
              type="email"
              required
              value={email}
              onChange={changeHandler(setEmail)}
              placeholder="Email Address"
              id="email"
            />
          </span>
          <span className="border bg-grayInput rounded-lg w-full px-4 flex justify-between items-center gap-2 text-gray-500">
            <label htmlFor="pass">
              <Lock />
            </label>
            <input
              className="w-full focus:outline-none bg-inherit py-2"
              type={`${isPass ? "password" : "text"}`}
              required
              value={password}
              onChange={changeHandler(setPassword)}
              placeholder="Password"
              id="pass"
            />
            <span onClick={PasswordToggler}>
              {isPass ? <EyeDisable /> : <Eye />}
            </span>
          </span>
          <span className="rounded-lg w-full py-2 px-4 flex justify-between items-start gap-2 text-gray-500">
            <label className="w-full" htmlFor="policy">
              <Link to={"#"} className="text-primary underline">
                Forgot Password?
              </Link>{" "}
            </label>
          </span>
          <button
            className="bg-primary w-full rounded-lg text-white py-2"
            type="submit"
          >
            Register
          </button>
        </form>
        <div className="footer absolute bottom-0 w-full bg-secondary flex items-center justify-center py-2 text-gray-800">
          Don't you have any account yet?{" "}
          <Link className="text-primary underline ml-1" to={"/login"}>
            Signup
          </Link>
        </div>
      </div>
      {status && (
        <div
          className={`${
            status?.status === 200
              ? "text-green-800 border-green-300 bg-green-50"
              : "text-red-800 border-red-300 bg-red-50"
          } fixed top-0 right-0 left-0 flex p-4 mb-4 text-sm border rounded-lg`}
          role="alert"
        >
          <svg
            aria-hidden="true"
            className="flex-shrink-0 inline w-5 h-5 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">{status.message}</span>
            {status.message === "LOGIN_SECCESS"
              ? ": Welcome to your todo app. You are redirecting to your todo page"
              : status.message === "INVALID_CREDENTIAL"
              ? ": Your Email is incorrect."
              : status.message === "INPUT_ERRORS"
              ? ": Your Email or your password is incorrect"
              : status.message === "INVALID_PASSWORD"
              ? ": Your password is incorrect"
              : ": Something bad has happend."}{" "}
          </div>
        </div>
      )}
    </main>
  );
};

export default Login;
