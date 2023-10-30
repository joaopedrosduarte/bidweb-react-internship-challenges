import { useEffect, useState } from 'react'
import Category from './Category'
import promoImage from '/banner2.png'
import { Product } from '../util/Product';


export default function Main() {
    const [mouses, setMouses] = useState<Product[]>([]);
    const [keyboard, setKeyBoard] = useState<Product[]>([]);
    const [headphone, setHeadphone] = useState<Product[]>([]);


    function filterProducts(products: Product[], title:string){
        console.log(products)
        const newArray:Product[] = []
        products.map(product => {
            if (product.type === title){
                newArray.push(product)
            }
        })

        return newArray;
    }

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setMouses(filterProducts(data, "Mouse"))
            setKeyBoard(filterProducts(data, "Keyboard"))
            setHeadphone(filterProducts(data, "Headphone"))
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className='p-6 py-8 gap-8 flex flex-col'>
            <img src={promoImage} alt="imagem de promo" />
            <div className='w-full overflow-hidden rounded-lg gap-4 flex flex-col'>
                <Category title='Mouses' products={mouses} />
                <Category title='headphone' products={headphone} />
                <Category title='Keyboard' products={keyboard} />
            </div>
        </div>
    )
}
