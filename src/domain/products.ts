import { ProductType } from "./product-type";

export class Product {
    id: number;
    name: string;
    brand: string;
    model: string;
    productTypes: ProductType[];
    
}