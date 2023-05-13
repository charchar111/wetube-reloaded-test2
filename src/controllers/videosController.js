import Video from "../models/Video";

const hashtagsExp = ["drama", "horror", "sad", "comedy", "action", "fantasy"];

export const home = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ createdAt: "desc" });

    res.render("home", { pageTitle: "home", videos });
  } catch (error) {
    console.log("error: ", error);
    return res.render("serverError");
  }
};

export const see = async (req, res) => {
  const { id } = req.params;

  try {
    const video = await Video.findById(id);
    console.log(video);
    return res.render("watch", { pageTitle: "watch", video });
  } catch (error) {
    return res.render("serverError");
  }
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    console.log("error: video can not found");
    return res.redirect("/servererror");
  } else {
    return res.render("edit", { pageTitle: "edit", video });
  }
};

export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;

  const videoCheck = await Video.exists({ _id: id });
  if (!videoCheck) {
    return res.redirect("/servererror");
  } else {
    const video = await Video.findByIdAndUpdate(id, {
      title,
      description,
      hashtags: Video.formatHashtags(hashtags),
    });
    res.redirect("/");
  }
};
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload", hashtagsExp });
};

export const postUpload = async (req, res) => {
  console.log(req.body);

  const hashtags =
    req.body.moreHashtags.trim() == ""
      ? `${req.body.hashtags.join()}`
      : `${req.body.hashtags.join()},${req.body.moreHashtags}`;
  const { title, description } = req.body;
  console.log(hashtags);
  try {
    await Video.create({
      title,
      description,
      cratedAt: Date.now(),
      hashtags: Video.formatHashtags(hashtags),
      meta: {
        views: 0,
        rating: 0,
      },
    });
  } catch {
    return res.redirect("/servererror");
  }
  return res.redirect("/");
};

export const serverError = (req, res) => res.render("serverError");

export const remove = async (req, res) => {
  const { id } = req.params;

  await Video.findByIdAndDelete(id);

  return res.redirect("/");
};

export const search = async (req, res) => {
  let videos = [];
  const keyword = req.query.title;
  console.log(keyword);
  if (keyword) {
    videos = await Video.find({
      title: { $regex: new RegExp(`${keyword}`, "gim") },
    }).sort({ createdAt: "desc" });
    console.log(videos);
  }
  return res.render("search", { pageTitle: "search", videos });
};
