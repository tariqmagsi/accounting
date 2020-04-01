const express = require("express");
const Images = require("../modals/image");
const routes = express.Router();
const sharp = require("sharp");
const multer = require("multer");

const fileUpload = multer({
  limits: {
    fileSize: 5000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please upload a jpg/png/jpeg file"));
    }
    cb(undefined, true);
  }
});

routes.post("/image",
  fileUpload.single("image"),
  async (req, res) => {
    try {
      const buffer = await sharp(req.file.buffer)
        .png()
        .toBuffer();

      const image = await Images({ image: buffer }).save();

      res.send({ image, success: true });
    } catch (e) {
      res.send({ e, success: false });
    }
  }
);
routes.get("/image", async (req, res) => {
  try {
    const image = await Images.find({});

    res.send({ image, success: true });
  } catch (e) {
    res.send({ e, success: false });
  }
});


routes.delete("/image/:_id", async (req, res) => {
  try {
    const image = await Images.findById({ _id: req.params._id });
    await image.remove();
    res.send({ image, success: true });
  } catch (e) {
    res.send({ error: "Error Not Found", success: false });
  }
});

module.exports = routes;
