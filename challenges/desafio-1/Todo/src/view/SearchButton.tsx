import { ReactElement } from "react";

interface InputForms {
    placeholder: string;
    onClick?: () => void;
    icon?: ReactElement;
    className: string
}

//React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function SearchButton({placeholder, onClick, icon, className}: InputForms) {
    return(
        <button className={`${className} flex w-full h-24 items-center justify-center`} onClick={onClick}>
            {icon}
            <span className="font-medium text-3xl">
                {placeholder}
            </span>
        </button>
    )
}