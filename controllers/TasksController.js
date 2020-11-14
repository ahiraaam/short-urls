const Task = require("../models/Task");

exports.store = (req, res) => {
  let task = {};
  task.description = req.body.description;
  Task.create(task).then((id) => {
    // if the request is expecting an ajax or json response
    res.redirect("/");
    if (req.xhr || req.headers.accept.indexOf("json") > -1) {
      Task.find(id).then((task) => res.json(task));
    } else {
      res.redirect("/");
    }
    console.log("Task created with id: ", id);
  });
};
