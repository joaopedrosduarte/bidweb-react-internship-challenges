import { ReactElement, useState } from "react";
import CreateTaskModal from "./CreateTaskModal";

interface InputForms {
  placeholder: string;
  onHandleCreateTask: (title:string) => void;
  icon?: ReactElement;
  className: string;
}

export default function CreateTaskButton({ placeholder, icon, className, onHandleCreateTask }: InputForms) {
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
          <CreateTaskModal setIsModalOpen={setIsModalOpen} onHandleCreateTask={onHandleCreateTask} />
        ) : null}
    </>
  );
}
