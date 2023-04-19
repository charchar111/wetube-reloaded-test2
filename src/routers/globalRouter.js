import express from "express";
import { join, login, search } from "../controllers/usersController";
import { trending } from "../controllers/videosController";

const globalRouter = express.Router();

globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
