import Video from "../models/Video";

const hashtagsExp = ["drama", "horror", "sad", "comedy", "action", "fantasy"];

export const home = async (req, res) => {
  try {
    const videos = await Video.find({});
    console.log(videos[1]);
    res.render("home", { pageTitle: "home", videos });
  } catch (error) {
    console.log("error: ", error);
    return res.render("serverError");
  }
};

export const see = (req, res) => {
  const { id } = req.params;

  res.render("watch", { pageTitle: "watch", video: [] });
};
export const getEdit = (req, res) => {
  const { id } = req.params;

  res.render("edit", { pageTitle: "edit", video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;

  res.redirect("/");
};
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload", hashtagsExp });
};

export const postUpload = async (req, res) => {
  console.log(req.body);
  const hashtags = req.body.hashtags.map((x) => "#" + x);
  const moreHashtags = req.body.moreHashtags.split(",").map((x) => "#" + x);
  hashtags.push(...moreHashtags);
  console.log(hashtags);

  const { title, description } = req.body;

  await Video.create({
    title,
    description,
    cratedAt: Date.now(),
    hashtags,
    meta: {
      views: 0,
      rating: 0,
    },
  });

  res.redirect("/");
};

export const remove = (req, res) => res.send(req.params.id + "video delete");
