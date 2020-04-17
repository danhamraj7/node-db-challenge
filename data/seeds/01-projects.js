exports.seed = function (knex) {
  return knex("projects").insert([
    {
      name: "Learn React",
      projectDescription: "one of the most popular library",
      completed: 1,
    },

    {
      name: "Learn Node",
      projectDescription: "Javascript run time tool",
      completed: 1,
    },

    {
      name: "Learn To Cook",
      projectDescription: "Save money instead of eating junk",
      completed: 0,
    },
  ]);
};
