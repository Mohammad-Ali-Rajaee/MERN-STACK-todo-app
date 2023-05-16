const mongoose = require("mongoose");
const todoModel = require("../model/todoModel");
const CircularJSON = require("circular-json");

const getAllTodos = async (req, res) => {
  try {
    const allTodos = await todoModel.find();
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
    const newTodo = req.body;
    console.log(newTodo);
    todoModel.create(newTodo).then((data) => {
      console.log("added successfully");
      res.status(200).json(data);
    });
  } catch (message) {
    console.log(message);
    res.status(500).json(message);
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

module.exports = { getAllTodos, deleteTodo, updateTodo, addTodo, getTodoById };
