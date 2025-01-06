import { users } from "../userDB.js";

export const login = (req, res) => {
  try {
    const { username, password } = req.body;

    const userFound = users.find((u) => u.username === username);

    if (!userFound) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    if (userFound.failedAttempts >= 3) {
      return res.status(401).json({ message: "User Blocked" });
    }

    if (password !== userFound.password) {
      userFound.failedAttempts++;
      console.log(userFound.failedAttempts);

      return res.status(401).json({ message: "Invalid credentials" });
    }
    userFound.isLogged = true;
    console.log(userFound);
  } catch (error) {
    return res.status(500).json({ error: `${error.message}, ${error.code}` });
  }

  return res.status(201).json({ message: "You are now logged in" });
};

export const logOut = (req, res) => {
  const userLogged = users.find((u) => u.isLogged === true);

  userLogged.isLogged = false;

  return res.status(200).json({ message: "GoodBye" });
};
