const Task = require("../models/Task");

exports.index = (req, res) => {
  let tasks = Task.all().then((ur) => {
    res.render("homepage/index", { tasks: tasks });
  });
};
