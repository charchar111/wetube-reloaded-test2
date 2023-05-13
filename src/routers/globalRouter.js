import express from "express";
import { join, login } from "../controllers/usersController";
import { home, serverError, search } from "../controllers/videosController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);
globalRouter.get("/servererror", serverError);

export default globalRouter;
