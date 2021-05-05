const util = require("util");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const uri = "mongodb+srv://minhtm88:Minh190597@clusterfood.0jjya.mongodb.net/food?retryWrites=true&w=majority";

const storage = new GridFsStorage({
  url: uri,
  options: {useNewUrlParser: true, useUnifiedTopology: true},
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-bezkoder-${file.originalname}`;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-bezkoder-${file.originalname}`
    };
  }
});

const uploadFiles = multer({storage}).array("multi-files", 5);
const uploadFilesMiddleware = util.promisify(uploadFiles);
module.exports = uploadFilesMiddleware;
