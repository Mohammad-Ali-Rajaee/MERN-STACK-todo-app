const { Router } = require("express");
const {
  getAllTodos,
  deleteTodo,
  updateTodo,
  addTodo,
  getTodoById,
} = require("../controllers/todoControllers");
const router = Router();

router.get("/", getAllTodos);
router.delete("/delete/:id", deleteTodo);
router.patch("/update/:id", updateTodo);
router.post("/add", addTodo);
router.get("/:id", getTodoById);

module.exports = router;
