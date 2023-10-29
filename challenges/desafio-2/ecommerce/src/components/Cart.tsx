import { ShoppingCartSimple, X } from "phosphor-react";
import { Drawer, Space } from "antd";
import { useState } from "react";
import ProductCart from './ProductsCart';

export default function Cart() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return(
        <div className={`static rg:hidden cursor-pointer`}>
            <Space onClick={() => setIsCartOpen(true)}>
                <ShoppingCartSimple size={24} color="rgb(255, 255, 255)" weight="bold" />
            </Space>
            <Drawer
                placement={"right"}
                closable={false}
                onClose={() => setIsCartOpen(false)}
                open={isCartOpen}
                key={'right'}
                styles={{header: {height: "0px"}, body: {backgroundColor: '#1A1A1A', padding: '0px'}}}
                className='text-gray-200'
            >
                <div className='flex flex-col flex-1'>
                    <div className='flex p-4 gap-4 items-center border-b-2 border-darkgray justify-between'>
                        <h1 className='text-2xl'>Carrinho de compras</h1>
                        <button className='cursor-pointer' onClick={() => setIsCartOpen(false)}>
                            <X size={24} color="rgb(255, 255, 255)" weight="bold" />
                        </button>
                    </div>
                    <ProductCart title="Mouse gamer" altImage="#" image="#" price="199.99" key='oi' />
                </div>
            </Drawer>
        </div>
    )
}