
import { Schema, model } from "mongoose";
import { order } from "./order.interface";

const orderschema=new Schema<order>({
    email: { type: String, required: true },
    productId: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true }
})

export const orderModel=model<order>('Orders',orderschema);