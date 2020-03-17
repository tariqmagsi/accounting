const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema(
  {
    name: {
      type: String
    },
    feedback: {
      type: String
    }
  },
  { toObject: { virtuals: true }, timestamps: true }
);

const Feedbacks = mongoose.model("Feedbacks", feedbackSchema);

module.exports = Feedbacks;
