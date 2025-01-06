import app from "./src/app.js";

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: "Server OK" });
});
