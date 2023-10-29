import { Rate } from "antd"

interface ProductProps {
    title: string
    price: string
    img: string
}

export default function Product({title, price, img}: ProductProps) {
    return(
        <div className= "flex-nowrap gap-4 flex flex-col">
            <div className="w-44 h-52 bg-primaryblack rounded-xl p-6">
                <img src="#" alt="Foto do produto" />
            </div>
            <div>
                <h1>
                    {title}
                </h1>
                <h1>
                    R$ {price}
                </h1>
                <Rate allowHalf disabled defaultValue={2.5} className="fill-blue-500  text-lightpurple" />
            </div>
        </div>
    )
}