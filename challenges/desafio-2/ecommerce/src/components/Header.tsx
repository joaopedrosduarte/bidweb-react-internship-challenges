import { useState } from 'react';
import { X , List } from 'phosphor-react';
import Cart from './Cart';


export default function Header() {
    const links = [
        { name: "Home", link: "/" },
        { name: "Catalogo", link: "/catalog" },
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className='bg-base shadow-lg border-darkgray border-b p-6 px-10 w-full'>
            <nav className="flex justify-between">
                <ul className={`border-t-2 border-darkgray float-right transition duration-300 rg:flex rg:flex-row flex-col flex justify-center align-middle rg:gap-6 rg:static rg:h-auto rg:w-auto absolute h-max w-full bg-primaryblack left-0 top-0 ${isMenuOpen ? "top-[+82px]" : "hidden"}`}>
                    {links.map((link) => (
                        <a className='flex flex-1 justify-center items-center py-8 duration-300 hover:bg-[#27272c]' href={link.link}>{link.name}</a>
                    ))}
                </ul>
                <div onClick={() => setIsMenuOpen(!isMenuOpen)} className={`"cursor-pointer border-gray border border-darkgray rounded p-1 flex justify-end h-max items-center"`}>
                    {isMenuOpen ? <X size={24} color="rgb(255, 255, 255)" weight="bold" /> : <List size={24} color="rgb(255, 255, 255)" weight="bold" /> }
                </div>
                <a href="/" className='flex gap-2 items-center'>
                    <h1 className='font-bold text-lightpurple'>BidWeb</h1>
                    <h1 className='font-semibold'>Ecommerce</h1>
                </a>
                <Cart />
            </nav>
        </header >
    )
}
