const fakeUser = { name: "tata", age: 23, gender: "male", login: true };
const videos = [
  {
    title: "first",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "second",
    rating: 8,
    comments: 5,
    createdAt: "2 minutes ago",
    views: 959,
    id: 2,
  },
  {
    title: "third",
    rating: 7,
    comments: 10,
    createdAt: "2 minutes ago",
    views: 519,
    id: 3,
  },
];

export const trending = (req, res) =>
  res.render("home", { pageTitle: "home", fakeUser, videos });
export const see = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];

  res.render("watch", { pageTitle: "watch", video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  res.render("edit", { pageTitle: "edit", video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  video.title = req.body.title;

  res.redirect("/");
};
export const getUpload = (req, res) => {
  res.render("upload", { pageTitle: "upload" });
};

export const postUpload = (req, res) => {
  const newVideoTitle = req.body.title;
  const newVideo = {
    title: newVideoTitle,
    rating: 0,
    comments: 0,
    createdAt: "just now",
    views: 0,
    id: videos.length + 1,
  };

  videos.push(newVideo);

  res.redirect("/");
};

export const remove = (req, res) => res.send(req.params.id + "video delete");
