const knex = require("../database/connection");

exports.PENDING = "pending";

exports.all = () => {
  return knex.select("*").from("tasks");
};

exports.create = (task) => {
  return knex("tasks").insert({ description: task.description });
};
