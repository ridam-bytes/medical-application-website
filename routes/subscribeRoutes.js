import express from "express";
import { subsribeController } from "../controllers/subscriptionController.js";

//router object
const router = express.Router();

router.post("/", subsribeController);

export default router;