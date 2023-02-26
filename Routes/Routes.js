const express = require("express");
const route = express.Router();
const controller = require("../Controller/controller")

route.post("/question", controller.createQuiz);
route.patch("/question/:id", controller.updateQuiz);
route.get("/question", controller.allQuiz);

module.exports = route;