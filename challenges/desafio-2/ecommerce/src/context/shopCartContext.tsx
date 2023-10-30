import {createContext, useState} from 'react'
import { ShopCartContextType } from '../types/types';
import { Product } from '../types/Product';

export const ShopCartContext = createContext({} as ShopCartContextType);

export default function ShopCartProvider({children}:{children: React.ReactNode}){
    const [id, setId] = useState(0)
    const [products, setProducts] = useState<Product[]>([])

    function add(product:Product){
        const newProduct = {...product, id}
        setProducts([...products, newProduct])
        setId((previousId) => previousId + 10)
    }

    function remove(id:number) {
        setProducts(products.filter((product) => id !== product.id))
    }

    return (
        <ShopCartContext.Provider value={{products, add, remove}}>{children}</ShopCartContext.Provider>
    )
}