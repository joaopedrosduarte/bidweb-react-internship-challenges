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

  function filterTasks() {
    if (tasks.length === 0) {
      return;
    } else {
      const newTodoTasksArray: Task[] = [];
      const newDoneTasksArray: Task[] = [];
      tasks.map((task) => {
        if (task.title !== "template"){
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
    <div className="flex w-full gap-10">
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
    </div>
  );
}
