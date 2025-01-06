import { Router } from "express";
import { bankOperations } from "../controllers/bank.controllers.js";

const router = Router();

router.put("/bank", bankOperations);

export default router;
