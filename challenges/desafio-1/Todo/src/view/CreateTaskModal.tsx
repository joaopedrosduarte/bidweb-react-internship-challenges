import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface CreateTaskModalProps {
  setIsModalOpen: (option: boolean) => void;
  onHandleCreateTask: (title: string) => void;
}

export default function CreateTaskModal({setIsModalOpen, onHandleCreateTask}: CreateTaskModalProps) {
  const [taskName, setTaskName] = useState("");

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setTaskName(event.target.value);
  }

  function handleNewTaskIsInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio!!");
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault();
    onHandleCreateTask(taskName);
    setTaskName("");
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-full my-6 mx-auto max-w-md">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-basegray outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-0 border-lightgray rounded-t">
              <h3 className="text-3xl font-semibold">Nova task</h3>
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 border border-red-500 rounded-lg text-sm outline-none focus:outline-none ease-linear transition-all duration-150"
                onClick={() => setIsModalOpen(false)}
              >
                Fechar
              </button>
            </div>
            {/*body*/}
            <form className="flex flex-col p-6 gap-4" onSubmit={handleNewTask}>
              <textarea
                required
                onInvalid={handleNewTaskIsInvalid}
                placeholder="Adicione o nome da task"
                value={taskName}
                onChange={handleNewTaskChange}
                className="bg-basegray border rounded-xl border-lightgray flex p-4 px-4 flex-1 w-full h-36 resize-none"
              ></textarea>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              >
                Criar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
}
