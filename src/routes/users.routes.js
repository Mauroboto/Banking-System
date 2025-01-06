import { Router } from "express";
import { bankMenu } from "../controllers/user.controllers.js";

const router = Router();

router.get("/users", bankMenu);

export default router;
