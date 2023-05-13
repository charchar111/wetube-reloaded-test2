import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

videoSchema.static("formatHashtags", function (hashtags) {
  const hashtag = hashtags
    .split(",")
    .map((word) =>
      word.trim().startsWith("#") ? word.trim() : `#${word.trim()}`
    );
  return hashtag;
});

// export function formatHashtags(hashtags) {
//   const hashtag = hashtags
//     .split(",")
//     .map((word) =>
//       word.trim().startsWith("#") ? word.trim() : `#${word.trim()}`
//     );
//   return hashtag;
// }

// videoSchema.methods.speak = function speak() {
//   console.log("video wowowowow!!!!");
// };
// 그냥 공식문서 보고 만들어봄

const video = mongoose.model("video", videoSchema);

export default video;
