const express = require("express");

// const projectsRouter = require("../projects/projectsRouter.js");
// const resourcesRouter = require("../resources/resourcesRouter.js");
// const tasksRouter = require("../tasks/tasksRouter.js");

const server = express();

server.use(express.json());

// server.use("/api/projects", projectsRouter);
// server.use("/api/resources", resourcesRouter);
// server.use("/api/tasks", tasksRouter);

server.get("/", (req, res) => {
  res.send("have fun in sprint challenge ...Dan !");
});

module.exports = server;
