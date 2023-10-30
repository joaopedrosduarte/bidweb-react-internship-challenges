import { Product } from "../types/Product"
import ProductButton from "./ProductButton"

interface SearchProps {
	title: string
	search: string
	sortType: string
	products: Product[]
	setSearch: (props: string) => void
	setSortType: (props: string) => void
}

export default function Search({ sortType ,title, search, products, setSortType, setSearch }:SearchProps) {
	return(
		<div className="flex flex-col gap-6">
			<div className="flex flex-1 justify-between items-center">
				<h1 className="font-bold text-xl">
					{title}
				</h1>
				<div className="flex items-center gap-2">
					<div className="flex gap-2">
						<button onClick={() => setSortType("name")} className={`transition-colors ${sortType == "name" ? "text-lightpurple" : "" }`}>Nome</button>
						<button onClick={() => setSortType("price")} className={`transition-colors ${sortType == "price" ? "text-lightpurple" : "" }`}>Preco</button>
						<button onClick={() => setSortType("")} >Remover</button>
					</div>
					<input
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Busque por um produto ...'
						className="p-2 rounded-md"
					></input>
				</div>
			</div>
			<div className="flex overflow-x-scroll pb-6">
				<div className="flex flex-nowrap gap-4">
					{
						products.map(product => {
							return <ProductButton key={product.id} id={product.id} title={product.name} price={product.price} img="#" rate={product.rating}/>
						})
					}
				</div>
			</div>
		</div>
	)
}
