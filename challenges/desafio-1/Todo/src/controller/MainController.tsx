import { useCallback, useEffect, useState } from "react";
import CreateTaskButton from "../view/CreateTaskButton";
import { Task } from "../model/Task";
import BoardController from "./BoardController";

export default function Main() {
  const [tasks, setTasks] = useState<Task[]>([{id:"template",title:"template", status:"todo", createdAt: new Date()}]);
  const [, updateState] = useState<unknown>()
  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    forceUpdate();
  }, [tasks, forceUpdate]);

  function handleCreateTask(title: string) {
    setTasks((prevTask) => [
      { id: title, title, createdAt: new Date(), status: "todo" },
      ...prevTask,
    ]);
  }

  function handleChangeTaskStatus(title: string) {
    const newTasksArray = tasks.map((task) => {
      if (task.title == title) {
        if (task.status == "done") {
          task.status = "todo";
          task.doneAt = null;
        } else {
          task.status = "done";
          task.doneAt = new Date();
        }
      }
      return task;
    });

    setTasks(newTasksArray);
  }

  function handleChangeTaskTitle(title: string, lastTitle: string) {
    const newTasksArray = tasks.map((task) => {
      console.log(task.title)
      if (task.title == lastTitle) {
        task.title = title;
        task.id = title;
      }
      return task;
    });

    setTasks(newTasksArray);
  }

  function handleDeleteTask(title: string) {
    const newTasksArray = tasks.filter((task) => {
      return task.title !== title;
    });

    setTasks(newTasksArray);
    forceUpdate();
  }

  return (
    <div className="flex flex-1 max-w-[50rem] w-full h-max flex-col">
      <div className="flex flex-1 flex-col justify-center border-b border-lightgray gap-2 pb-8 mb-8">
        <div className="flex flex-1">
          <CreateTaskButton
            placeholder="Criar task"
            className="bg-darkblue rounded-md"
            onHandleCreateTask={handleCreateTask}
          />
        </div>
      </div>
      <main>
        <BoardController
          tasks={tasks}
          onHandleChangeTaskStatus={handleChangeTaskStatus}
          onHandleChangeTaskTitle={handleChangeTaskTitle}
          onHandleDeleteTask={handleDeleteTask}
        />
      </main>
    </div>
  );
}
