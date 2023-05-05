import express from "express";
import { join, login, search } from "../controllers/usersController";
import { home, trending } from "../controllers/videosController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
