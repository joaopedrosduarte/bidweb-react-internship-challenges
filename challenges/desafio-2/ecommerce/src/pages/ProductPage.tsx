import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { Product } from "../types/Product";
import ProductComponent from '../components/ProductComponent';


export default function ProductPage(){
    const [product, setProduct] = useState<Product>()
    const params = useParams()

    function filterProduct(products:Product[]){
        const id = Number(params.id);
        if (products.length !== 0) {
            const product = products.filter(product => {
                if ( product.id == id ) {
                    return product;
                }
            })

            return product[0]
        } 
    }

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setProduct(filterProduct(data));
        })
        .catch(err => console.log(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="flex flex-col w-full h-max bg-darkgray">
            <ProductComponent product={product} />
        </div>
    )
}