import { InputNumber } from "antd"
import { Trash } from "phosphor-react"
import { useState } from "react"

interface ProductCartProps {
    title: string
    price: string
    image: string
    altImage: string
}

export default function ProductInCart({title, price, image, altImage}:ProductCartProps) {
    const [qtdProd, setQtdProd] = useState(1)

    const onChange = (value: number | null) => {
        //FIXME: mybe this | null will be a error in the future 
        setQtdProd(value!);
    };

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
                    <div>
                        {/** tailwind just having conflict with the ant design lib but its okei i think */}
                        <InputNumber className="bg" min={1} value={1} className='border-darkgray' defaultValue={qtdProd} onChange={onChange}  />
                    </div>
                </div>
            </div>
            <div className="cursor-pointer border-gray border border-darkgray rounded p-1 flex justify-end h-max items-center">
                <Trash size={24} color="#FFF" />
            </div>
        </div>
    )
}