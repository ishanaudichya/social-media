import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();
/*this looks good i think*/
router.post("/login", login);

export default router;
