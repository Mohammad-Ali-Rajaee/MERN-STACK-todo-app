import axios from "axios";
const baseLink = "https://backend-mern-koaz.onrender.com";
const baseApi = axios.create({
  baseURL: baseLink,
  headers: {
    "Content-Type": "Application/json",
  },
});

const deleteTodo = async (id) => {
  try {
    const result = await baseApi.delete(`/delete/${id}`);
    return result.data;
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};

const updateTodo = async (id, newData) => {
  try {
    const result = await baseApi.patch(`/update/${id}`, newData);
    return result.data;
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};

const getTodoById = async (id) => {
  try {
    const result = await baseApi.get(`/${id}`);
    return result.data;
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};

const getAllTodos = async () => {
  try {
    const result = await baseApi.get(`/`);
    return result.data;
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};

const addTodo = async (newTodo) => {
  try {
    const result = await baseApi.post(`/add`, newTodo);
    return result.data;
  } catch ({ message }) {
    console.log(message);
    return message;
  }
};

export { getAllTodos, getTodoById, deleteTodo, updateTodo, addTodo };
