const { Router } = require("express");
const {
  getAllTodos,
  deleteTodo,
  updateTodo,
  addTodo,
  getTodoById,
  auth,
} = require("../controllers/todoControllers");
const router = Router();

router.get("/home", auth , getAllTodos);
router.delete("/delete/:id", deleteTodo);
router.patch("/update/:id", updateTodo);
router.post("/add" , auth, addTodo);
router.get("/:id", getTodoById);

module.exports = router;
