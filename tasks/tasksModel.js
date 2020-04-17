const db = require("../data/dbconfig");
module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("tasks");
}

function findById(id) {
  return db("tasks").where({ id }).first();
}

function add(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(task, id) {
  return db("tasks").where("id", Number(id)).update(task);
}

function remove(id) {
  return db("tasks").where("id", Number(id)).del();
}
