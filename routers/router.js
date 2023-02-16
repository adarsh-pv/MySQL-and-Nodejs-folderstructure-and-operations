import { Router } from "express";
import { getallUsers } from "../controller/userController.js";
const router = Router()


router.get('/',getallUsers)


export default router;
