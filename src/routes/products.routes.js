import { Router } from "express";
import * as productCtrl from '../controller/product.controller.js';
const router = Router();

router.get('/all',productCtrl.getProducts);
router.post('/',productCtrl.createProduct);
router.get('/:id',productCtrl.getProductById);
router.put('/:id',productCtrl.updateProductById);
router.delete('/:id',productCtrl.deleteProductById);

export default router;
