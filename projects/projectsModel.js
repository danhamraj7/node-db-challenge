const db = require("../data/dbconfig");
module.exports = {
  find,
  findById,
  findTasks,
  add,
  update,
  remove,
};

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects").where({ id }).first();
}

//in progress
function findTasks(project_id) {
  return db("tasks")
    .join("projects", "tasks.project_id", "=", "projects.id")
    .select(
      "project_id",
      "projectDescription",
      "task_id",
      "taskDescription",
      "note"
    )
    .where({ project_id: project_id });
}

function add(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function update(project, id) {
  return db("projects").where("id", Number(id)).update(project);
}

function remove(id) {
  return db("projects").where("id", Number(id)).del();
}
