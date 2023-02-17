import { Router } from "express";
import {  createTable, deleteUser, findAllUsers, inserUser, updateUser } from "../controller/userController.js";
const router = Router()


router.get('/',createTable)
router.post('/insert',inserUser)
// router.get('/Users',findAllUsers)
// router.get('/updataUser',updateUser)
// router.get('/deleteUser',deleteUser)


export default router;
