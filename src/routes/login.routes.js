import { Router } from "express";
import { login, logOut } from "../controllers/login.controllers.js";
import { accessFunction } from "../middleware/accessFunction.js";

const router = Router();

router.post("/login", login);
router.post("/logout", accessFunction, logOut);

export default router;
