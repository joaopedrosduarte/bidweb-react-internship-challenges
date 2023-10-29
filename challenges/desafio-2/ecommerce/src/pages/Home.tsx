import Header from "../components/Header";
import Main from "../components/Main";

export default function Home(){
    return (
        <div className="w-full overflow-hidden rounded-lg gap-4 flex flex-col">
            <Header />
            <Main />
        </div>
    )
}