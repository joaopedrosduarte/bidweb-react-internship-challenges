import { ReactElement, useState } from "react";
import ModalCreateTask from "./ModalCreateTask";

interface InputForms {
  placeholder: string;
  HandleCreateTask: (title:string) => void;
  icon?: ReactElement;
  className: string;
}

//React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CreateTaskButton({ placeholder, icon, className, HandleCreateTask }: InputForms) {
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
          <ModalCreateTask setIsModalOpen={setIsModalOpen} HandleCreateTask={HandleCreateTask} />
        ) : null}
    </>
  );
}
