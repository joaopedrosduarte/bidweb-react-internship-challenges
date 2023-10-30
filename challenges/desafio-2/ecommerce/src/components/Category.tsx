import { Product } from "../util/Product"
import ProductButton from "./ProductButton"

interface CategoryProps {
    title: string
    products: Product[]
}

export default function Category({ title, products }: CategoryProps) {
    console.log(products)

    return(
        <div className="flex flex-col gap-6">
            <h1 className="font-bold">
                {title}
            </h1>
            <div className="flex overflow-x-scroll pb-6">
                <div className="flex flex-nowrap gap-4">
                    {
                        products.map(product => {
                            return <ProductButton id={product.id} title={product.name} price={product.price} img="#" rate={product.rating}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}