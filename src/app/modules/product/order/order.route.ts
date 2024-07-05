import express from 'express'
import { OrderController } from './order.controller'

const router=express.Router()

router.post('/create-order',OrderController.CreateOrder)
router.get('/',OrderController.getOrder)
router.get('/email',OrderController.getOrderByWmail)

export const OrderRouter=router;