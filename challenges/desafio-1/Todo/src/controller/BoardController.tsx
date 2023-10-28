import { Task } from "../model/Task";
import Column from "../view/Column";
import { useEffect, useState } from "react";

interface BoardControllerProps {
  tasks: Task[];
  onHandleChangeTaskStatus: (title: string) => void;
  onHandleChangeTaskTitle: (title: string, lastTitle: string) => void;
  onHandleDeleteTask: (title: string) => void;
}

export default function BoardController({
  tasks,
  onHandleChangeTaskStatus,
  onHandleChangeTaskTitle,
  onHandleDeleteTask,
}: BoardControllerProps) {
  const [todoTaskArray, setTodoTaskArray] = useState<Task[]>([]);
  const [doneTaskArray, setDoneTaskArray] = useState<Task[]>([]);
  const [isDefault, setIsDefault] = useState(true)

  function filterTasks() {
    if (tasks.length === 0) {
      setTodoTaskArray([]);
      setDoneTaskArray([]);
      return;
    } else {
      const newTodoTasksArray: Task[] = [];
      const newDoneTasksArray: Task[] = [];
      tasks.map((task) => {
        if (task.title !== "template") {
          if (task.status === "todo") {
            newTodoTasksArray.push(task);
          } else {
            newDoneTasksArray.push(task);
          }
        }
      });
      setDoneTaskArray(newDoneTasksArray);
      setTodoTaskArray(newTodoTasksArray);
    }
  }

  useEffect(() => {
    filterTasks();
  }, [tasks]);

  return (
    <div className="flex flex-col w-full gap-10">
      <div className="flex justify-between">
        <span>Tipo de view</span>
        <div className="flex">
          <button className={`rounded-full rounded-r-none font-light bg-lightblue px-4 ${isDefault ? "" : "border border-lightblue text-lightblue"}`} onClick={() => setIsDefault(true)}>
            Padrão
          </button>
          <button className="rounded-full rounded-l-none font-light bg-[#8284FA] px-4" onClick={() => setIsDefault(false)}>
            Junta
          </button>
        </div>
      </div>
      <div className="flex w-full gap-10">
        {isDefault ? 
        <>
          <Column
            title="Todo"
            numTasks={todoTaskArray.length}
            tasks={todoTaskArray}
            onHandleChangeTaskStatus={onHandleChangeTaskStatus}
            onHandleChangeTaskTitle={onHandleChangeTaskTitle}
            onHandleDeleteTask={onHandleDeleteTask}
          />
          <Column
            title="Done"
            numTasks={doneTaskArray.length}
            tasks={doneTaskArray}
            onHandleChangeTaskStatus={onHandleChangeTaskStatus}
            onHandleChangeTaskTitle={onHandleChangeTaskTitle}
            onHandleDeleteTask={onHandleDeleteTask}
          />
        </> : 
        <Column
          title="Tasks"
          numTasks={todoTaskArray.length}
          tasks={todoTaskArray}
          onHandleChangeTaskStatus={onHandleChangeTaskStatus}
          onHandleChangeTaskTitle={onHandleChangeTaskTitle}
          onHandleDeleteTask={onHandleDeleteTask}
        />
        }
      </div>
    </div>
  );
}
