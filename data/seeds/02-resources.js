exports.seed = function (knex) {
  return knex("resources").insert([
    { name: "Lambda school", resourceDescription: "best online bootcamp" },
    { name: "W3 school", resourceDescription: "open resource tutorial" },
    { name: "Youtube", resourceDescription: "video tutorial" },
    {
      name: "Zillows.com",
      resourceDescription: "A wide range of Homes for sale",
    },
  ]);
};
