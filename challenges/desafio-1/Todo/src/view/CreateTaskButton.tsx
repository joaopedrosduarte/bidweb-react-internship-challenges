import { ReactElement, useState } from "react";

interface InputForms {
  placeholder: string;
  onClick?: () => void;
  icon?: ReactElement;
  className: string;
}

//React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CreateTaskButton({
  placeholder,
  icon,
  className,
}: InputForms) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        className={`${className} flex w-full h-24 items-center justify-center`}
        onClick={() => setIsModalOpen(true)}
      >
        {icon}
        <span className="font-medium text-base">{placeholder}</span>
      </button>
        {isModalOpen ? (
          <a></a>
        ) : null}
    </>
  );
}
