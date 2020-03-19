const express = require("express");
const app = express();
const profileRoutes = require("./src/routes/profile-routes");
const keyRoutes = require("./src/routes/key-routes");
const appointmentRoutes = require("./src/routes/appointment-routes");
const feedbackRoutes = require("./src/routes/feedback-routes");
const emailRoutes = require("./src/routes/email-routes");
require("./src/db/mongoose");

app.use(express.json());
app.use(profileRoutes);
app.use(keyRoutes);
app.use(appointmentRoutes);
app.use(feedbackRoutes);
app.use(emailRoutes)

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`API listening on port ${port}...`);
});
