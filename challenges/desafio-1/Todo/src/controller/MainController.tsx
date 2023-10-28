import { useState } from "react";
import CreateTaskButton from "../view/CreateTaskButton";
import { TaskType } from "../model/TaskType";
import BoardController from "./BoardController";
import SearchButton from "../view/SearchButton";

export default function Main() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  function handleCreateTask( title:string ) {
    setTasks(prevTask => ([{ id: title, title, createdAt: new Date(), status: "todo" }, ...prevTask]));
  }

  function handleChangeTaskStatus( title: string ){
    const newTasksArray = tasks.map(task => {
      if (task.title == title){
        if (task.status == 'done'){
          task.status = 'todo'
        } else {
          task.status = 'done'
        }
      }
      return task
    })

    setTasks(newTasksArray)
  }

  return (
    <div className="flex flex-1 max-w-[50rem] w-full h-max flex-col">
      <div className="flex flex-1 flex-col justify-center border-b border-lightgray gap-2 pb-8 mb-8">
        {isSearching ? <h1>voltar</h1> : null}
        <div className="flex flex-1">
          <CreateTaskButton placeholder="Criar task" className="bg-darkblue rounded-l-md" onHandleCreateTask={handleCreateTask} />
          <SearchButton placeholder="Buscar" className="bg-green rounded-r-md" />
        </div>
      </div>
      <main>
        <BoardController tasks={tasks} onHandleChangeTaskStatus={handleChangeTaskStatus} />
      </main>
    </div>
  );
}

