

export type Inventory={
    quantity:string,
    inStock:boolean
}
export type Variant=
{
    type: string;
    value: string; 
}
export type Products= {
    name: string;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants:Variant[],
    inventory: Inventory  
}