const db = require("../data/dbconfig");
module.exports = {
  find,
  findById,
  add,
  update,
  remove,
};

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id }).first();
}

function add(resource) {
  return db("resources")
    .insert(resource, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(resource, id) {
  return db("resources").where("id", Number(id)).update(resource);
}

function remove(id) {
  return db("resources").where("id", Number(id)).del();
}
