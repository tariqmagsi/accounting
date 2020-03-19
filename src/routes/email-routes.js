const express = require("express");
const Emails = require("../modals/email");
const routes = express.Router();

routes.post("/create/email", async (req, res) => {
  try {
    const email = await Emails(req.body).save();

    res.send({ success: true, email });
  } catch (e) {
    res.send({ success: false });
  }
});

routes.post("/get/email", async (req, res) => {
  try {
    const email = await Emails.findOne({});
    res.send({ email, success: true });
  } catch (e) {
    res.send({ success: false });
  }
});

routes.patch("/update/email", async (req, res, next) => {
  const changedEmail = req.body;
  const fieldsToUpdate = Object.keys(changedEmail);
  const fieldsInModel = ["email", "password"];
  const isUpdateAllowed = fieldsToUpdate.every(field =>
    fieldsInModel.includes(field)
  );
  if (!isUpdateAllowed) {
    return res.send({ error: "Invalid fields!" });
  }
  try {
    const email = await Emails.findOne({});

    if (!email) {
      res.send({ success: false });
    }
    Object.assign(email, changedEmail);
    await email.save();
    res.send({ email, success: true });
  } catch (e) {
    res.send({ e, success: false });
  }
});

module.exports = routes;
