import axios from "axios";
// const baseLink = "https://backend-mern-koaz.onrender.com";
const appLink = "http://localhost:5050/app/todos";
const apiLink = "http://localhost:5050/api/auth";
const appUrl = axios.create({
  baseURL: appLink,
  headers: {
    "Content-Type": "Application/json",
  },
});
const apiUrl = axios.create({
  baseURL: apiLink,
  headers: {
    "Content-Type": "Application/json",
  },
});

const registerHandler = async ({ name, email, password }) => {
  try {
    const response = await apiUrl.post("/register", {
      name: name,
      email: email,
      password: password,
    });
    return response.data;
  } catch ({ response }) {
    return response.data;
    // return response.data;
  }
};

const loginHandler = async ({ email, password }) => {
  try {
    const response = await apiUrl.post("/login", {
      email: email,
      password: password,
    });
    return response.data;
  } catch ({ response }) {
    return response.data;
  }
};

const deleteTodo = async (id) => {
  try {
    const result = await appUrl.delete(`/delete/${id}`);
    return result.data;
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};

const updateTodo = async (id, newData) => {
  try {
    const result = await appUrl.patch(`/update/${id}`, newData);
    return result.data;
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};

const getTodoById = async (id) => {
  try {
    const result = await appUrl.get(`/${id}`);
    return result.data;
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};

const getAllTodos = async (accessToken) => {
  try {
    const response = await appUrl.get("/home", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const addTodo = async ({ title, complete, accessToken }) => {
  try {
    const response = await appUrl.post(
      "/add",
      {
        title,
        complete,
      },
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};

export {
  getAllTodos,
  getTodoById,
  deleteTodo,
  updateTodo,
  addTodo,
  registerHandler,
  loginHandler,
};
