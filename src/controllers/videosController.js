export const trending = (req, res) => res.send("home");
export const see = (req, res) => res.send("watch");
export const edit = (req, res) => res.send(req.params.id + "video edit");
export const upload = (req, res) => res.send("video upload");
export const remove = (req, res) => res.send(req.params.id + "video delete");
