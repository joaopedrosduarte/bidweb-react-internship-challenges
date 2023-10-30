import { Rate } from "antd"
import { useNavigate } from "react-router-dom"

interface ProductProps {
    id: string
    title: string
    price: string
    rate: number
    img?: string
}

export default function ProductButton({ id, title, price, rate }: ProductProps) {
    const nav = useNavigate()

    function handleGoToProduct(){
        nav(`/product/${id}`)
    }

    return(
        <div className= "flex-nowrap gap-1 flex flex-col justify-between cursor-pointer" onClick={handleGoToProduct}>
            <div className="flex flex-col justify-between">
                <div className="w-44 h-52 bg-primaryblack rounded-xl p-6 mb-4">
                    <img src="#" alt="Foto do produto" />
                </div>
                <h1 className="max-w-[176px] flex">
                    {title}
                </h1>
                <h1>
                    R$ {price}
                </h1>
            </div>
            <Rate allowHalf disabled defaultValue={rate} className="text-lightpurple" />
        </div>
    )
}