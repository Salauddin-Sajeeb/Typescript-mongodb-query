
import { Products } from "./product.interface";
import { productsmodel } from "./product.model";

//creating new product
const createProductDb=async(product:Products)=>
{
    const result= await productsmodel.create(product);
    return result; 
}
//get all data
const getProducts=async ()=>
{
    const result=productsmodel.find()
    return result;
}

 //single data   
const getSingleProduct=async(_id:string)=>
{        
    const result=await productsmodel.findOne({_id});
    return result
} 
 //update the product value   
const getSingleProductUpdate=async(_id:string,body:object)=>
{        
    const result=await productsmodel.findByIdAndUpdate(_id,body, { new: true });
    return result
}      
//deleting a single data
const DeleteData=async(_id:string)=>
{
    const result=await productsmodel.deleteOne({_id})
    return result;
}

//get product by tags

const getProductByTag=async(tag:string)=>
{
    const result=await productsmodel.find({ tags: { $in: [tag] } })
    return result;
}


export const productService={
    createProductDb,getProducts,getSingleProduct,DeleteData,getSingleProductUpdate,getProductByTag
}

