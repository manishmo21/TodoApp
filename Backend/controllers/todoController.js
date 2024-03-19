const Todo = require("../models/todoModel");

module.exports.getToDo = async (req, res) => {
  const todos = await Todo.find();
  res.send(todos);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;
  const todos = await Todo.create({ text })
    .then(() => {
      console.log("Added Successfully...");
      console.log(todos);
      res.send(todos);
    })
    .catch((error) => console.log(error));
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;
  Todo.findByIdAndUpdate(_id, { text }).then(() => {
    res.send("Updated Successfully").catch((error) => {
      console.log(error);
    });
  });
};
module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;
  Todo.findByIdAndDelete(_id).then(() => {
    res.send("Deleted Successfully").catch((error) => {
      console.log(error);
    });
  });
};
