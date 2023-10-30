import { Product } from "./Product";

export interface ShopCartContextType {
    products: Product[];
    add: (product: Product) => void;
    remove: (id: number) => void
}