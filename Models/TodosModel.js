/** @format */

const mongoose = require("mongoose");
const Joi = require("joi");

const TodoModel = mongoose.model(
  "TodoModel",
  new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    brief: {
      type: String,
      required: true,
    },
    priority: {
      type: String,
      requird: true,
    },
    Date: {
      type: Date,
      default: Date.now,
      trim: true,
    },
  })
);
const ValidateTodos = (todos) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    brief: Joi.string().required(),
    priority: Joi.string().required(),
  });
  return schema.validate(todos);
};

exports.TodoModel = TodoModel;
exports.ValidateTodos = ValidateTodos;
