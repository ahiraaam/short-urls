const knex = require("../database/connection");
const appConfig = require("../configs/app");

exports.all = () => {
  return knex.select("*").from("urlsConplete");
};

exports.create = (urlObject) => {
  return knex("urlsConplete").insert({
    url: urlObject.url,
    hash: urlObject.hash,
    shortUrl: `http://localhost:${appConfig.expressPort}/${urlObject.hash}`,
  });
};

exports.findHash = (hash) => {
  return knex.select("*").from("urlsConplete").where("hash", hash).first();
};
exports.changeCounter = (item) => {
  return knex("urlsConplete")
    .update({ visited: item.visited + 1 })
    .where("id", item.id);
};
