import Product from "./Product"

interface CategoryProps {
    title: string
}

export default function Category({ title }: CategoryProps) {
    return(
        <div className="flex flex-col gap-6">
            <h1 className="font-bold">
                {title}
            </h1>
            <div className="flex overflow-x-scroll pb-6">
                <div className="flex flex-nowrap gap-4">
                    <Product title="Mouse" price="199.99" img="#"/>
                    <Product title="Mouse" price="199.99" img="#"/>
                    <Product title="Mouse" price="199.99" img="#"/>
                    <Product title="Mouse" price="199.99" img="#"/>
                </div>
            </div>
        </div>
    )
}