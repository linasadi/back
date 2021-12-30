import express from 'express';
import auth from "./auth/index.js";
import User from "./User/index.js";

const router = express.Router();

router.use("/auth", auth);
router.use("/User", User);

export default router;