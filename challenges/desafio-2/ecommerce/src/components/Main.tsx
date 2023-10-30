import { useEffect, useState } from 'react'
import Category from './Category'
import promoImage from '/banner2.png'
import { Product } from '../types/Product';
import Search from './Search';


export default function Main() {
    const [products, setProducts] = useState<Product[]>([])
    const [sortType, setSortType] = useState("");
    const [mouses, setMouses] = useState<Product[]>([]);
    const [keyboard, setKeyBoard] = useState<Product[]>([]);
    const [headphone, setHeadphone] = useState<Product[]>([]);
    const [search, setSearch] = useState("")

    function filterProducts(products: Product[], title:string){
        const newArray:Product[] = []
        products.map(product => {
            if (product.type === title){
                newArray.push(product)
            }
        })

        return newArray;
    }

    useEffect(() => {
        fetch('http://localhost:3000/products')
        .then(res => {
            return res.json()
        })
        .then(data => {
            setProducts(data);
            setMouses(filterProducts(data, "Mouse"))
            setKeyBoard(filterProducts(data, "Keyboard"))
            setHeadphone(filterProducts(data, "Headphone"))
        })
        .catch(err => console.log(err))
    }, [])


    const filteredData = products.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      }).sort((a, b) => {
        if(sortType === "name"){
          return a.name.localeCompare(b.name);
        }
        else if(sortType === "price"){
          return a.price - b.price;
        }
        else{
          return 0;
        }
  
      });

    return (
        <div className='p-6 py-8 gap-8 flex flex-col'>
            <img src={promoImage} alt="imagem de promo" />
            <Search setSortType={setSortType} search={search} setSearch={setSearch} products={filteredData} title='Todos os produtos' sortType={sortType} />
            <div className='w-full overflow-hidden rounded-lg gap-4 flex flex-col'>
                <img src={promoImage} alt="imagem de promo" />
                <Category title='Mouses' products={mouses} />
                <Category title='Headphone' products={headphone} />
                <Category title='Keyboard' products={keyboard} />
            </div>
        </div>
    )
}
