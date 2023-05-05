import "./db";
import video from "./models/Video";
import app from "./server";

console.log("init");

const port = 3000;
app.listen(port, () => console.log(`listen connect port: ${port}`));
