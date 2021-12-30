import express from 'express';
import {updateUser} from "./controller.js";

const router = express.Router();


//update user by ID
router.put('/', updateUser);

export default router;