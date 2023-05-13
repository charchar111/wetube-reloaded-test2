import express from "express";

import {
  see,
  getEdit,
  postEdit,
  getUpload,
  remove,
  postUpload,
} from "../controllers/videosController";

const videoRouter = express.Router();

videoRouter.route("/upload").get(getUpload).post(postUpload);
videoRouter.get("/:id([0-9a-f]{24})", see);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
videoRouter.get("/:id([0-9a-f]{24})/delete", remove);

export default videoRouter;
