import express from "express";
import morgan from "morgan";
import userRoutes from "./routes/users.routes.js";
import bankRoutes from "./routes/bank.routes.js";
import accessRoutes from "./routes/login.routes.js";
import { accessFunction } from "./middleware/accessFunction.js";
const app = express();

//CONFIG
app.use(morgan("dev"));
app.use(express.json());

//ROUTES
//ROUTES
app.use("/api", accessRoutes);
app.use("/api", accessFunction, bankRoutes);
app.use("/api", accessFunction, userRoutes);

export default app;
