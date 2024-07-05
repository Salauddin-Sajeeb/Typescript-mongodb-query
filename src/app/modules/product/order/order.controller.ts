/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
//import { OrderValidation } from "./order.validation";
import { OrderService } from "./order.service";


const CreateOrder=async(req:Request,res:Response)=>
{
  try 
  {
 //creating validation using zod
   const order=req.body;
   //const zodParsedata=OrderValidation.parse(orderData);
   const result=await OrderService.CreateOrderDb(order);
   res.status(200).json({
   success:true,
   message:'order created successfully',
   data:result
    })

  }
catch(err:any)
  {
    res.status(500).json({
    success:false,
    message:err.message||'something went wrong!',
    error:err,  
     })
  }

}

//get order data
const getOrder=async(req:Request,res:Response)=>
{
 
    try
    {
    const result=await OrderService.getAllOrder()
    res.status(200).json({
    success:true,
    message:'order data retreated',
    data:result
    })
     }
      
    catch(err:any)
    {
    const statusCode = err.statusCode || 500;
     res.status(statusCode).json({
     success:false,
     message:err.message||'something went wrong!',
     error:err,
                 
    })
    }
}
//search order with email address
const getOrderByWmail=async(req:Request,res:Response)=>
    {
     try{

       const {email}=req.query;
       if (typeof email !== 'string') {
        throw new Error('Invalid email parameter');
    }
        const result=await OrderService.getorderbyEmail(email)
        res.status(200).json({
        success:true,
        message:'order retreated successfully by email',
        data:result         
         })
    
        }
    catch(err:any)
     {
        res.status(500).json({
        success:false,
        message:err.message||'something went wrong!',
        error:err,   
        })
     }
                   
}

export const OrderController={
    CreateOrder,getOrder,getOrderByWmail
}