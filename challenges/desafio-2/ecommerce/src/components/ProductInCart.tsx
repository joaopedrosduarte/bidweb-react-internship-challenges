import { Trash } from "phosphor-react"
import useShopCart from "../hooks/useShopCart"

interface ProductCartProps {
    id: number
    title: string
    price: number
    image: string
    altImage: string
}

export default function ProductInCart({id,title, price, altImage}:ProductCartProps) {
    const {remove} = useShopCart()

    return (
        <div className='flex flex-1 p-4 w-full justify-between items-center'>
            <div className="flex gap-4">
                <div className="flex h-full w-20 bg-darkgray rounded-xl justify-center align-middle">
                    <img className="flex w-20 h-20 p-4" src={"#"} alt={altImage} />
                </div>
                <div className="flex flex-col gap-1">
                    <div>
                        <h1 className="font-normal text- text-white">
                            {title}
                        </h1>
                        <span className="font-bold text-sm text-white">
                            R$ {price}
                        </span>
                    </div>
                </div>
            </div>
            <div className="cursor-pointer border-gray border border-darkgray rounded p-1 flex justify-end h-max items-center" onClick={() => remove(id)}>
                <Trash size={24} color="#FFF" />
            </div>
        </div>
    )
}