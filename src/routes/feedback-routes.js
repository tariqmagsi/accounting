const express = require("express");
const Feedbacks = require("../modals/feedback");
const routes = express.Router();

routes.post("/create/feedback", async (req, res) => {
  try {
    const feedback = await Feedbacks(req.body).save();
    res.send({ success: true, feedback });
  } catch (e) {
    res.send({ success: false });
  }
});

routes.post("/get/feedback", async (req, res) => {
  try {
    const feedback = await Feedbacks.find({});
    res.send({ feedback, success: true });
  } catch (e) {
    res.send({ success: false });
  }
});

module.exports = routes;
