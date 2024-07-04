import { z } from 'zod';

// Define Zod schema for Inventory
const InventorySchema = z.object({
    quantity: z.string(),
    inStock: z.boolean(),
});

// Define Zod schema for Student
const ProductsSchema = z.object({
    name: z.string(),
    description: z.string(), 
    price: z.number(),
    category: z.string(),
    tags:  z.array(z.string()),
    variants: z.array(
        z.object({
            type: z.string(),
            value: z.string()
        })
    ),
    inventory: InventorySchema
});

export const ProductValidationSchema = ProductsSchema;
