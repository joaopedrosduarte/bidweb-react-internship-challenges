import InputForms from '../view/InputForms';


export default function Main() {
    return(
        <div className="flex flex-1 max-w-[50rem] h-max">
            <div className='flex flex-1 justify-center border-b border-lightgray pb-8'>
                <InputForms placeholder='Criar task' className='bg-darkblue rounded-l-md'/>
                <InputForms placeholder='buscar' className='bg-green rounded-r-md'/>
            </div>
        </div>
    )
}