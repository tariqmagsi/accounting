const express = require("express");
const Appointments = require("../modals/appointment");
const routes = express.Router();
const auth = require("../middleware/auth");
const { toAdmin, toClient } = require("../email/email")

routes.post("/create/appointment", async (req, res) => {
  try {
    const appointment = await Appointments(req.body).save();
    toAdmin(appointment._id, req.body.name, req.body.email, req.body.number, req.body.description, req.query.email, req.query.password)
    res.send({ success: true, appointment });
  } catch (e) {
    res.send({ success: false });
  }
});

routes.post("/get/appointment", async (req, res) => {
  try {
    const appointment = await Appointments.find({
      isApproved: req.query.isApproved
    });
    res.send({ appointment, success: true });
  } catch (e) {
    res.send({ success: false });
  }
});

routes.patch("/update/appointment", auth, async (req, res, next) => {
  const changedAppointment = req.body;
  const fieldsToUpdate = Object.keys(changedAppointment);
  const fieldsInModel = ["isApproved", "date"];
  const isUpdateAllowed = fieldsToUpdate.every(field =>
    fieldsInModel.includes(field)
  );
  if (!isUpdateAllowed) {
    return res.send({ error: "Invalid fields!" });
  }
  try {
    const appointment = await Appointments.findOne({ _id: req.query.id });

    if (!appointment) {
      res.send({ success: false });
    }
    Object.assign(appointment, changedAppointment);
    await appointment.save();
    toClient(req.body.date, appointment.name, req.query.email, req.query.password, req.query.emailClient)
    res.send({ appointment, success: true });
  } catch (e) {
    res.send({ e, success: false });
  }
});

module.exports = routes;
