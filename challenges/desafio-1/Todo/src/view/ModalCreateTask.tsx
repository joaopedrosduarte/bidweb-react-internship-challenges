import { ChangeEvent, InvalidEvent, useState } from "react";

interface ModalCreateTaskProps {
  setIsModalOpen: (option: boolean) => void;
  HandleCreateTask?: (title: string) => void;
}

export default function ModalCreateTask({ setIsModalOpen, HandleCreateTask }: ModalCreateTaskProps) {
  const [taskName, setTaskName] = useState('')

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setTaskName(event.target.value);
  }

  function handleNewTaskIsInvalid(event:InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatorio!!");
  }

  return (
    <>
      <div className="justify-center max-w-[80%] items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-sm">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
              <h3 className="text-3xl font-semibold text-black">Nova task</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setIsModalOpen(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"></span>
              </button>
            </div>
            {/*body*/}
            <form action="">
              <div className="relative p-6 flex-auto">
                <textarea required onInvalid={handleNewTaskIsInvalid} placeholder="Adicione o nome da task" value={taskName} onChange={handleNewTaskChange} className="flex flex-1 w-full resize-none"></textarea>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Fechar
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                >
                  Criar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black max-w-[80%]"></div> 
    </>
  );
}
