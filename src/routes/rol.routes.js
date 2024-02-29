import { Router } from "express";
import * as rolCtrl from '../controller/rol.controller.js';
const router = Router();

router.get('/all',rolCtrl.getRoles)

export default router