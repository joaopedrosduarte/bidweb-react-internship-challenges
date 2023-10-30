import { useParams } from "react-router-dom"
import Header from "../components/Header"
import { InputNumber, Rate } from 'antd';
import { useEffect, useState } from "react";
import { Product } from "../util/Product";


export default function ProductPage(){
    const [product, setProduct] = useState<Product>()
    const [qtdProd, setQtdProd] = useState(1)
    const params = useParams()

    function filterProduct(products:Product[]){
        if (products.length !== 0) {
            const product = products.filter(product => {
                if ( product.id == params.id ) {
                    return product;
                }
            })

            return product[0]
        } 
    }

    const onChange = (value: number | null) => {
        //FIXME: mybe this | null will be a error in the future 
        setQtdProd(value!);
    };

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setProduct(filterProduct(data));
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="flex flex-col w-full h-max bg-darkgray">
            <Header />
            <div className="block w-full h-max max-h-96">
                <img className="p-10 h-96" src="#" alt="Foto do produto" />
            </div>
            <div className="bg-base flex rounded-2xl rounded-b-none flex-col px-6 py-8">
                <div className="w-full flex gap-2 justify-evenly">
                    <div className="w-full h-20 rounded-lg bg-darkgray cursor-pointer"></div>
                    <div className="w-full h-20 rounded-lg bg-darkgray cursor-pointer"></div>
                    <div className="w-full h-20 rounded-lg bg-darkgray cursor-pointer"></div>
                    <div className="w-full h-20 rounded-lg bg-darkgray cursor-pointer"></div>
                </div>
                <div className="flex flex-col py-8 gap-4">
                    <div>
                        <h1 className="text-lg font-normal">{product?.name}</h1>
                        <div className="flex items-center gap-1">
                            <Rate allowHalf disabled defaultValue={product?.rating} className="text-lightpurple bg-white" />
                            <span className="text-xs text-[#A1A1A1]">({product?.rating})</span>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold">
                        R$ {product?.price}
                    </h1>
                    {/** tailwind just having conflict with the ant design lib but its okei i think */}
                    <InputNumber className="bg" min={1} value={qtdProd} className='border-darkgray' defaultValue={qtdProd} onChange={onChange}  />
                </div>
                <div className="flex gap-2 flex-col pb-8">
                    <h1>Descrição</h1>
                    <span>{product?.description}</span>
                </div>
                <button className="bg-[#5033C3] mb-8 py-2 w-full h-max rounded-xl">
                    ADICIONAR AO CARRINHO
                </button>
            </div>
        </div>
    )
}