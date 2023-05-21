import { createContext, useCallback, useContext, useReducer } from "react";
import {
  addTodo,
  deleteTodo,
  getAllTodos,
  updateTodo,
} from "../Api/apiHandler";

const initialTodos = {
  todos: [],
  err: null,
  isLoading: false,
};

const todoContext = createContext(initialTodos);

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALL_TODOS":
      return {
        ...state,
        isLoading: false,
        err: null,
        todos: action.payload,
      };
    case "LOADING":
      return { ...state, isLoading: true };
    case "ERROR":
      return { ...state, err: action.payload };
    case "CREATE_TODO": {
      return {
        ...state,
        isLoading: false,
        err: null,
        todos: [...state.todos, action.payload],
      };
    }
    case "DELETE": {
      return {
        ...state,
        isLoading: false,
        err: null,
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
      };
    }

    case "UPDATE": {
      return {
        ...state,
        isLoading: false,
        err: null,
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload._id) {
            return {
              ...todo,
              title: action.payload.title,
              complete: action.payload.complete,
            };
          } else {
            return todo;
          }
        }),
      };
    }
    default: {
      const message = "unknown request";
      return message;
    }
  }
};
export const TodoContextProvider = ({ children }) => {
  const createTodo = async ({ title, complete }) => {
    try {
      todoDispatch({
        type: "LOADING",
      });
      const accessToken = localStorage.getItem("accessToken");
      const temp = await addTodo({ title, complete, accessToken });
      todoDispatch({
        type: "CREATE_TODO",
        payload: temp,
      });
    } catch ({ message }) {
      todoDispatch({
        type: "ERROR",
        payload: message,
      });
    }
  };

  const fetchAll = useCallback(async () => {
    try {
      todoDispatch({
        type: "LOADING",
      });
      const accessToken = localStorage.getItem("accessToken");
      const res = await getAllTodos(accessToken);
      todoDispatch({
        type: "SET_ALL_TODOS",
        payload: res,
      });
    } catch ({ message }) {
      todoDispatch({
        type: "ERROR",
        payload: message,
      });
    }
  }, []);

  const removeTodo = async (id) => {
    try {
      todoDispatch({
        type: "LOADING",
      });
      const temp = await deleteTodo(id);
      todoDispatch({
        type: "DELETE",
        payload: temp,
      });
    } catch ({ message }) {
      todoDispatch({
        type: "ERROR",
        payload: message,
      });
    }
  };

  const editTodo = ({ _id, complete, title }) => {
    try {
      todoDispatch({
        type: "LOADING",
      });
      const temp = updateTodo(_id, { title, complete });
      todoDispatch({
        type: "UPDATE",
        payload: temp,
      });
    } catch ({ message }) {
      todoDispatch({
        type: "ERROR",
        payload: message,
      });
    }
  };

  const [state, todoDispatch] = useReducer(todoReducer, initialTodos);
  const value = {
    state,
    todoDispatch,
    fetchAll,
    createTodo,
    removeTodo,
    editTodo,
  };

  return <todoContext.Provider value={value}>{children}</todoContext.Provider>;
};

export const useCollectionState = () => useContext(todoContext);

export default todoContext;
