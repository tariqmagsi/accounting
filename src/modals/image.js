const mongoose = require("mongoose");
var autoIncrement = require("mongoose-auto-increment");

const imageSchema = mongoose.Schema(
  {
    image: {
      type: String
    }
  },
  { toObject: { virtuals: true }, timestamps: true }
);

autoIncrement.initialize(mongoose.connection);
imageSchema.plugin(autoIncrement.plugin, "Images");

const Images = mongoose.model("Images", imageSchema);

module.exports = Images;
