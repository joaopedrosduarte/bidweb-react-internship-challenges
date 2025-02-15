import { ShoppingCartSimple, X } from "phosphor-react";
import { Drawer, Space } from "antd";
import { useState } from "react";
import ProductCart from './ProductInCart';
import useShopCart from "../hooks/useShopCart";

export default function Cart() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {products} = useShopCart()

    return(
        <div className={`static rg:hidden cursor-pointer`}>
            <Space onClick={() => setIsCartOpen(true)} className="cursor-pointer border-gray border border-darkgray rounded p-1 flex justify-end h-max items-center" >
                <ShoppingCartSimple size={24} color="rgb(255, 255, 255)" weight="bold" />
            </Space>
            <Drawer
                placement={"right"}
                closable={false}
                onClose={() => setIsCartOpen(false)}
                open={isCartOpen}
                key={'right'}
                styles={{header: {height: "0px"}, body: {backgroundColor: '#0B0B0B', padding: '0px'}}}
                className='text-gray-200'
            >
                <div className='flex flex-col flex-1'>
                    <div className='flex p-4 gap-4 items-center border-b-2 border-darkgray justify-between'>
                        <h1 className='text-2xl'>Carrinho de compras</h1>
                        <button className='cursor-pointer' onClick={() => setIsCartOpen(false)}>
                            <X size={24} color="rgb(255, 255, 255)" weight="bold" />
                        </button>
                    </div>
                    {
                        products.map((product) => {
                            return(
                                <ProductCart id={product.id} title={product.name} altImage={product.name} image={product.img_url} price={product.price} key={product.id} />
                            )
                        })
                    }
                </div>
            </Drawer>
        </div>
    )
}