const express = require("express");
const app = express();
const profileRoutes = require("./src/routes/profile-routes");
const keyRoutes = require("./src/routes/key-routes");
const appointmentRoutes = require("./src/routes/appointment-routes");
const feedbackRoutes = require("./src/routes/feedback-routes");
const emailRoutes = require("./src/routes/email-routes");
const path = require("path")
require("./src/db/mongoose");

app.use(express.json());
app.use(profileRoutes);
app.use(keyRoutes);
app.use(appointmentRoutes);
app.use(feedbackRoutes);
app.use(emailRoutes)
app.use(express.static(__dirname + "/public"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname + "/client/build/index.html"));
  });
}

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
