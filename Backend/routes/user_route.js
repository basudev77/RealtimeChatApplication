import express from 'express';
import { signup, login, logout, allUsers } from '../controller/user_controller.js';
import secureRoute from '../middleware/secureRoute.js';

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.get("/allusers", secureRoute, allUsers);

export default router;