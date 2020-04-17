const express = require("express");

const Projects = require("./projectsModel");

const router = express.Router();

//get all projects
router.get("/", (req, res) => {
  Projects.find()
    .then((projects) => {
      res.json(projects);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get projects" });
    });
});

//get projects by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Projects.findById(id)
    .then((project) => {
      if (project) {
        res.json(project);
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get project" });
    });
});

//add a project
router.post("/", (req, res) => {
  const projectData = req.body;

  Projects.add(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new project" });
    });
});

//update a project
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Projects.findById(id)
    .then((project) => {
      if (project) {
        Projects.update(changes, id).then((updatedProject) => {
          res.json({ "record updated ": updatedProject });
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update project" });
    });
});

//delete a project
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Projects.remove(id)
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
