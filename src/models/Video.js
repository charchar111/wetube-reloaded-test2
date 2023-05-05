import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

// videoSchema.methods.speak = function speak() {
//   console.log("video wowowowow!!!!");
// };
// 그냥 공식문서 보고 만들어봄

const video = mongoose.model("video", videoSchema);

export default video;
