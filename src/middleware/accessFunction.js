import { users } from "../userDB.js";

export const accessFunction = (req, res, next) => {
  const userLogged = users.find((u) => u.isLogged === true);

  try {
    if (!userLogged) {
      return res.status(401).json({ message: "You Must Be Logged In" });
    } else {
      next();
    }
  } catch (error) {
    return res.status(500).json({ error: `${error.message}, ${error.code}` });
  }
};
