import express from 'express'
import { productController } from './product.controller';

const router=express.Router();

router.post('/create-product',productController.CreateProduct)
router.get('/',productController.getProduct)
router.get('/:productId',productController.getSingleProduct)
router.put('/:productId',productController.getSingleProductUpdate)
router.delete('/:productId',productController.deleteSingleProduct)

export const productRoutes=router;