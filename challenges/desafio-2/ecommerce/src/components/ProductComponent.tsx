import { InputNumber } from "antd";
import Header from "./Header";
import { useState } from "react";
import useShopCart from "../hooks/useShopCart";
import { Product } from "../types/Product";
import { useNavigate } from 'react-router-dom';

interface ProductProps {
    product?: Product
}

export default function ProductComponent({product}: ProductProps) {
    const [qtdProd, setQtdProd] = useState(1)
    const nav = useNavigate()
    const {add} = useShopCart()

    const onChange = (value: number | null) => {
        //FIXME: mybe this | null will be a error in the future 
        setQtdProd(value!);
    };

    function handleAddProductOnCart() {
        add(product || {} as Product)
        nav("/");
    }

    return (
        <>
            <Header />
            <div className="block w-full h-max max-h-96">
                <img className="p-10 h-96" src="#" alt="Foto do produto" />
            </div>
            <div className="bg-base flex rounded-2xl rounded-b-none flex-col px-6 py-8">
                <div className="flex flex-col py-8 gap-4">
                    <div>
                        <h1 className="text-lg font-normal">{product?.name}</h1>
                        <div className="flex items-center gap-1">
                            {/* <Rate allowHalf disabled defaultValue={product?.rating} className="text-lightpurple bg-white" /> */}
                            <span>Nota :</span>
                            <span className="text-sm text-[#A1A1A1]">({product?.rating})</span>
                        </div>
                    </div>
                    <h1 className="text-2xl font-bold">
                        R$ {product?.price}
                    </h1>
                    {/** tailwind just having conflict with the ant design lib but its okei i think */}
                    <InputNumber className="bg" min={1} value={qtdProd} className='border-darkgray' defaultValue={qtdProd} onChange={onChange}  />
                </div>
                <div className="flex gap-2 flex-col pb-8">
                    <h1 className="font-bold">Descrição</h1>
                    <span className="text-sm font-normal">{product?.description}</span>
                </div>
                <button className="bg-[#5033C3] mb-8 py-2 w-full h-max rounded-xl font-bold text-lg" onClick={handleAddProductOnCart}>
                    ADICIONAR AO CARRINHO
                </button>
            </div>
        </>
    )
}