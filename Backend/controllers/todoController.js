const Todo = require("../models/todoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred while fetching todos");
  }
};

module.exports.saveToDo = async (req, res) => {
  try {
    const { text } = req.body;
    const newTodo = await Todo.create({ text });
    console.log("Added Successfully...");
    console.log(newTodo);
    res.json(newTodo);
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred while saving todo");
  }
};

module.exports.updateToDo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    await Todo.findByIdAndUpdate(_id, { text });
    res.send("Updated Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred while updating todo");
  }
};

module.exports.deleteToDo = async (req, res) => {
  try {
    const { _id } = req.body;
    await Todo.findByIdAndDelete(_id);
    res.send("Deleted Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error occurred while deleting todo");
  }
};
