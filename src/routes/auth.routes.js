import { Router } from "express";
import * as authCtrl from '../controller/auth.controller.js';
const router = Router();

router.post('/signup',authCtrl.signUp)//registro 
router.post('/signin',authCtrl.signIn)//login

export default router;