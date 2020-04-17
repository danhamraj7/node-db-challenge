const express = require("express");

const Tasks = require("./tasksModel");

const router = express.Router();

//get all tasks
router.get("/", (req, res) => {
  Tasks.find()
    .then((tasks) => {
      res.json(tasks);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get tasks" });
    });
});

//get task by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.findById(id)
    .then((task) => {
      if (task) {
        res.json(task);
      } else {
        res.status(404).json({ message: "Could not find task with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get task" });
    });
});

//add a task
router.post("/", (req, res) => {
  const taskData = req.body;

  Tasks.add(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new task" });
    });
});

//update a task
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Tasks.findById(id)
    .then((task) => {
      if (task) {
        Tasks.update(changes, id).then((updatedTask) => {
          res.json({ "record updated ": updatedTask });
        });
      } else {
        res.status(404).json({ message: "Could not find task with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update task" });
    });
});

//delete
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.remove(id)
    .then((deleted) => {
      if (deleted) {
        res.json({ "record removed": deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to delete project" });
    });
});

module.exports = router;
