const menu = ["DEPOSIT", "WITHDRAW", "TRANSFER"];

export const bankMenu = (req, res) => {
  try {
    return res.status(200).json({ menu });
  } catch (error) {
    return res.status(500).json({ error: `${error.message}, ${error.code}` });
  }
};
