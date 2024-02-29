import { Router } from "express";
import * as userCtrl from '../controller/user.controller.js';
import { authJwt } from "../middlewares/index.js";
const router = Router();

router.get('/all',userCtrl.getAllUsers);
router.post('/',[authJwt.verifyToken,authJwt.isAdmin],userCtrl.createUser);
router.get('/:id',userCtrl.getUserById);
router.put('/:id',[authJwt.verifyToken,authJwt.isInvestigador],userCtrl.updateUserById);
router.delete('/:id',[authJwt.verifyToken,authJwt.isAdmin],userCtrl.deleteUserById);


export default router;