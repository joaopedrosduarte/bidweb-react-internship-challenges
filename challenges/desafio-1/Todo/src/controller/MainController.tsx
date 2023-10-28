import { useEffect, useState } from "react";
import CreateTaskButton from "../view/CreateTaskButton";
import { TaskType } from "../model/TaskType";
import BoardController from "./BoardController";
import SearchButton from "../view/SearchButton";

export default function Main() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    setTasks([
      {
        id: "Task 1",
        title: "Task 1",
        createdAt: new Date(),
        status: "todo",
        doneAt: null,
      },
      {
        id: "Task 2",
        title: "Task 2",
        createdAt: new Date(),
        status: "todo",
        doneAt: null,
      },
      {
        id: "Task 3",
        title: "Task 3",
        createdAt: new Date(),
        status: "todo",
        doneAt: null,
      },
      {
        id: "Fazer uma reunião com o CEO da bidweb para sexta feira",
        title: "Fazer uma reunião com o CEO da bidweb para sexta feira",
        createdAt: new Date(),
        status: "done",
        doneAt: new Date(),
      },
      {
        id: "Task 4",
        title: "Task 4",
        createdAt: new Date(),
        status: "done",
        doneAt: new Date(),
      },
    ]);
  }, []);

  function handleCreateTask({ id, title, createdAt, status }: TaskType) {
    setTasks([{ id, title, createdAt, status }, ...tasks]);
  }

  return (
    <div className="flex flex-1 max-w-[50rem] w-full h-max flex-col">
      <div className="flex flex-1 flex-col justify-center border-b border-lightgray gap-2 pb-8 mb-8">
        {isSearching ? <h1>voltar</h1> : null}
        <div className="flex flex-1">
          <CreateTaskButton placeholder="Criar task" className="bg-darkblue rounded-l-md" />
          <SearchButton placeholder="Buscar" className="bg-green rounded-r-md" />
        </div>
      </div>
      <main>
        <BoardController tasks={tasks} />
      </main>
    </div>
  );
}
