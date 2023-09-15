"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get("/", (req, res, next) => {
  res.status(200).json({ todos: todos });
});
router.post("/todo", (req, res, next) => {
  const body = req.body;
  const newTODO = {
    id: new Date().toISOString(),
    text: body.text,
  };
  todos.push(newTODO);
  res.status(200).json({ newTODO: newTODO });
});
router.put(" ", (req, res, next) => {
  const params = req.params;
  const todoid = params.todoID;
  const body = req.body;
  const todoIndex = todos.findIndex((todoItem) => todoItem.id == todoid);
  if (todoIndex >= 0) {
    todos[todoIndex] = { id: todos[todoIndex].id, text: body.text };
    res.status(200).json({ message: "updated", todos: todos });
  }
  res.status(404).json({ message: "No id found" });
});
router.delete("/todo/:id", (req, res, next) => {
  todos = todos.filter((todoItem) => todoItem.id != req.params.id);
  res.status(200).json({ message: "deleted", todos: todos });
});
exports.default = router;
