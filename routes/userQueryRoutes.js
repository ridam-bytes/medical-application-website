import express from "express";
import { addUserQuery } from "../controllers/userQueryController.js";

const router = express.Router();

router.post("/addUserQuery", addUserQuery)

export default router;