const mongoose = require("mongoose");

const emailSchema = mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true
    },
    password: {
      type: String
    }
  },
  { toObject: { virtuals: true }, timestamps: true }
);

const Emails = mongoose.model("Emails", emailSchema);

module.exports = Emails;