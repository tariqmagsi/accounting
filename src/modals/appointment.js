const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const appointmentSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    email: {
      type: String,
      lowercase: true
    },
    number: {
      type: String
    },
    date: {
      type: String,
      default: ""
    },
    description: {
      type: String
    },
    isApproved: {
      type: Boolean,
      default: false
    }
  },
  { toObject: { virtuals: true }, timestamps: true }
);

autoIncrement.initialize(mongoose.connection);
appointmentSchema.plugin(autoIncrement.plugin, "Appointments");

const Appointments = mongoose.model("Appointments", appointmentSchema);

module.exports = Appointments;
