/** @format */

const router = require("express").Router();
const { TodoModel, ValidateTodos } = require("../Models/TodosModel");
const _ = require("lodash");


router.get("/", async (req, res) => {
  let todos = await TodoModel.find();
  res.send(todos);
});

router.post("/", async (req, res) => {
  const { error } = ValidateTodos(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  let todos = new TodoModel(_.pick(req.body, ["title", "brief", "priority"]));

  todos = await todos.save();

  res.send(todos);
});

router.delete("/:id", async (req, res) => {
  let todos = await TodoModel.findByIdAndRemove(req.params.id);
  if (!todos) return res.status(400).send("Invalid Genre Id");
  res.send(todos);
});

module.exports = router;
