const knex = require("../database/connection");

exports.all = () => {
  return knex.select("*").from("urlsConplete");
};

exports.create = (urlObject) => {
  return knex("urlsConplete").insert({
    url: urlObject.url,
    hash: urlObject.hash,
  });
};

exports.findHash = (hash) => {
  return knex.select("*").from("urlsConplete").where("hash", hash).first();
};
