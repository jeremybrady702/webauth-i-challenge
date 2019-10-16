const db = require("../dbConfig");

module.exports = {
  add,
  findBy,
  findUsers
};

function add(user) {
  return db("users").insert(user, "id");
}

function findBy(filter) {
  return db("users").where(filter);
}

function findUsers() {
  return db("users");
}
