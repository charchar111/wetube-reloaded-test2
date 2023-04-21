import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/usersRouter";
import videoRouter from "./routers/videosRouter";

const app = express();
const port = 3000;
const logger = morgan("dev");

app.use(logger);
app.set("views", process.cwd() + "/src/views");
app.set("view engine", "pug");
app.use(express.urlencoded({ extended: true }));
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);
app.listen(port, () => console.log(`connect port: ${port}`));
