import Category from './Category'
import promoImage from '/banner2.png'


export default function Main() {
    return (
        <div className='p-6 py-8 gap-8 flex flex-col'>
            <img src={promoImage} alt="imagem de promo" />
            <div className='w-full overflow-hidden rounded-lg gap-4 flex flex-col'>
                <Category title='Mouses'/>
            </div>
        </div>
    )
}
