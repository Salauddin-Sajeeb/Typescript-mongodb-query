import { Schema, model } from "mongoose";
import { Inventory, Products } from "./product.interface";


const inventorySchema=new Schema<Inventory>({
    quantity: { type: String, required: true },
    inStock: { type: Boolean, required: true }
})



const ProductsSchema = new Schema<Products>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { type: [String], required: true },
    variants: [{
        type: { type: String, required: true },
        value: { type: String, required: true }
    }],
    inventory: inventorySchema
        
    
}); 

export const productsmodel=model<Products>('Products',ProductsSchema)