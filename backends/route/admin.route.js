import express from "express";
import { signup ,login } from "../controller/admin.controller.js";
const router = express.Router();
router.post("/adminsignup",signup);
router.post("/adminlogin",login);
export default router;
