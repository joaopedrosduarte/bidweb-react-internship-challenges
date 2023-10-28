import { TaskType } from "../model/TaskType";
import Column from "../view/Column";
import { useEffect, useState } from "react";

interface BoardControllerProps {
  tasks: TaskType[];
  onHandleChangeTaskStatus: (title:string) => void;
}

export default function BoardController({ tasks, onHandleChangeTaskStatus }: BoardControllerProps) {
  const [todoTaskArray, setTodoTaskArray] = useState<TaskType[]>([]);
  const [doneTaskArray, setDoneTaskArray] = useState<TaskType[]>([]);

  function filterTasks() {
    if (tasks.length === 0) {
      return;
    } else {
      const newTodoTasksArray: TaskType[] = []
      const newDoneTasksArray: TaskType[] = []
      tasks.map((task) => {
        console.log(task);
        if (task.status === "todo") {
          newTodoTasksArray.push(task)
        } else {
          newDoneTasksArray.push(task)
        }
      });
      setDoneTaskArray(newDoneTasksArray)
      setTodoTaskArray(newTodoTasksArray)
    }
  }

  useEffect(() => {
    filterTasks();
  }, [tasks]);

  return (
    <div className="flex w-full gap-10">
      <Column
        title="Todo"
        numTasks={todoTaskArray.length}
        tasks={todoTaskArray}
        onHandleChangeTaskStatus={onHandleChangeTaskStatus}
      />
      <Column
        title="Done"
        numTasks={doneTaskArray.length}
        tasks={doneTaskArray}
        onHandleChangeTaskStatus={onHandleChangeTaskStatus}
      />
    </div>
  );
}
