import { useContext } from "react";
import { ShopCartContext } from "../context/shopCartContext"
import { ShopCartContextType } from "../types/types";

export default function useShopCart(): ShopCartContextType {
    const context = useContext(ShopCartContext);

    if(!context){
        console.log("Use o ShopCart Provider");
    }

    return context
}