import express from "express";
import newControllers from "../app/controllers/NewControllers";
const router = express.Router();

router.use("/", newControllers.index(req, res));

export default router;
