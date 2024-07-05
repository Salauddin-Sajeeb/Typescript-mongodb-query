
import { z } from 'zod';

// Define Zod schema for Purchase
export const OrderValidation = z.object({
    email: z.string().email(), 
    productId: z.string(),
    price: z.number().positive(), 
    quantity: z.number().int().positive() 
});