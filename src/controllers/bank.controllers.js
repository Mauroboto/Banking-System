import { users } from "../userDB.js";

export const bankOperations = (req, res) => {
  const userLogged = users.find((u) => u.isLogged === true);

  try {
    const { deposit, withdraw, transfer } = req.body;

    if (!req.body || Object.keys(req.body).length === 0) {
      return res
        .status(400)
        .json({ message: "You Must Input The Requested Fields" });
    }

    if (deposit) {
      userLogged.balance = userLogged.balance + deposit;
    }

    if (transfer) {
      if (userLogged.balance - transfer < 0) {
        return res.status(401).json({ message: "forbbiden" });
      } else {
        userLogged.balance = userLogged.balance - transfer;
      }
    }

    if (withdraw) {
      if (userLogged.balance - withdraw < 0) {
        return res.status(401).json({ message: "forbbiden" });
      } else {
        userLogged.balance = userLogged.balance - withdraw;
      }
    }
  } catch (error) {
    return res.status(500).json({ error: `${error.message}, ${error.code}` });
  }

  return res.status(202).json({ userLogged });
};
