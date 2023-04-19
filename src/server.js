import express from "express";
import morgan from "morgan";

const app = express();
const port = 4000;

const logger = morgan("dev");

app.use(logger);
app.get("/", (req, res) => {
  res.send("╰(*°▽°*)╯");
});

app.listen(port, () => console.log(`connect port: ${port}`));
