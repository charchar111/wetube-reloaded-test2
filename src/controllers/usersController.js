export const join = (req, res) => res.send("join");
export const login = (req, res) => res.send("login");
export const search = (req, res) => res.send("search");
export const logout = (req, res) => res.send("logout");

export const see = (req, res) => {
  res.send(req.params.id + "profile");
};

export const edit = (req, res) => res.send("edit");
export const remove = (req, res) => res.send("delete");