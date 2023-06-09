import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/test2", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", (error) => console.log("❌DB Error", error));
db.once("open", () => console.log("✅db connect success"));
