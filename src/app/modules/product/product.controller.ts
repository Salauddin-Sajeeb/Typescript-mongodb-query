/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from "express";
import { productService } from "./product.service";


//create product
const CreateProduct= async (req:Request,res:Response)=>
{
try
{

const product=req.body;
const result= await productService.createProductDb(product);
res.status(200).json({
    success:true,
    message:'product is created',
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

const getProduct=async(req:Request,res:Response)=>
 {
    try{
        const result=await productService.getProducts()
        res.status(200).json({
           success:true,
           message:'product data retreated',
           data:result
        })
       }
   
       catch(err:any)
       {
           res.status(500).json({
               success:false,
               message:err.message||'somethig went wrong!',
               error:err,
              
            })
       }
 }
//get single Product
const getSingleProduct=async(req:Request,res:Response)=>
{
    try{
           const {productId}=req.params;
           const result=await productService.getSingleProduct(productId)
           res.status(200).json({
           success:true,
           message:'Single Data retreated',
           data:result         
       })

       }
    catch(err:any)
        {
           res.status(500).json({
               success:false,
               message:err.message||'somethig went wrong!',
               error:err,   
            })
        }
               
    }

//delete data
const deleteSingleProduct=async(req:Request,res:Response)=>
{
     try{
           const {productId}=req.params;
           const result=await productService.DeleteData(productId)
           res.status(200).json({
           success:true,
           message:'Single Data deleted',
           data:result    
       })
         }
     catch(err:any)
        {
           res.status(500).json({
               success:false,
               message:err.message||'somethig went wrong!',
               error:err,   
            })
        }         
    } 
    
//get data from tags

const getSingleProductUpdate=async(req:Request,res:Response)=>
{
    try{
         const {productId}=req.params;
         const body=req.body;
         const result=await productService.getSingleProductUpdate(productId,body)
         res.status(200).json({
         success:true,
         message:'Single Data updated successfully',
         data:result    
         })
      }
    catch(err:any)
    {
        res.status(500).json({
        success:false,
        message:err.message||'somethig went wrong!',
        error:err,   
        })
    }         
        }    
    
const getSingleProductByTag=async(req:Request,res:Response)=>
 {
    try{
     const { tag } = req.query;
     if (typeof tag !== 'string') {
        throw new Error('Invalid tag parameter');
    }
        const result=await productService.getProductByTag(tag)
        res.status(200).json({
         success:true,
        message:'data retreated by tag',
        data:result         
         })
            
     }
    catch(err:any)
    
    {
      res.status(500).json({
      success:false,
      message:err.message||'somethig went wrong!',
      error:err,   
    })
  }
                           
 }
            

export const productController={
    CreateProduct,getProduct,getSingleProduct,deleteSingleProduct,getSingleProductUpdate,getSingleProductByTag
}