const express = require("express");

const Resources = require("./resourcesModel");

const router = express.Router();

//get all resources
router.get("/", (req, res) => {
  Resources.find()
    .then((resources) => {
      res.json(resources);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resources" });
    });
});

//get resource by id
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Resources.findById(id)
    .then((resource) => {
      if (resource) {
        res.json(resource);
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource with given id." });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to get resource" });
    });
});

// add a resource
router.post("/", (req, res) => {
  const resourceData = req.body;

  Resources.add(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create new resource" });
    });
});

//update a resource
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Resources.findById(id)
    .then((resource) => {
      if (resource) {
        Resources.update(changes, id).then((updatedResource) => {
          res.json({ "record updated ": updatedResource });
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update resource" });
    });
});

//delete a resource
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Resources.remove(id)
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
