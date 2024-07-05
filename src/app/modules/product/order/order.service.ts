
import { order } from "./order.interface";
import { orderModel } from "./order.model";


//create order
const CreateOrderDb=async(orders:order)=>
{
    const result=await orderModel.create(orders)
    return result;
}
//get all order
const getAllOrder=async()=>
{
    const result=await orderModel.find();
    return result 
}
export const getorderbyEmail=async(email:string)=>
{
   const result=await orderModel.find({email}) 
   return result
}

export const OrderService={
    CreateOrderDb,getAllOrder,getorderbyEmail
}

