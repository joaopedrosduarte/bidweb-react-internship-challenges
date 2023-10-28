import CreateTaskButton from "../view/CreateTaskButton";
import BoardController from "./BoardController";
import SearchButton from "../view/SearchButton";
import { Task } from "../model/Task";
import { useState } from "react";

export default function Main() {
  const [tasks, setTasks] = useState<Task[]>(() => {

    const todo = localStorage.getItem("t");

    return todo !== null ? JSON.parse(todo) : []
  });

  function handleCreateTask(title: string) {
    setTasks((prevTask) => [
      { id: title, title, createdAt: new Date(), status: "todo" },
      ...prevTask,
    ]);
    localStorage.setItem("t", JSON.stringify([...tasks, { id: title, title, createdAt: new Date(), status: "todo" }]))
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
    localStorage.setItem("t", JSON.stringify(newTasksArray))
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
    localStorage.setItem("t", JSON.stringify(newTasksArray))
    setTasks(newTasksArray);
  }

  function handleDeleteTask(title: string) {
    const newTasksArray = tasks.filter((task) => {
      return task.title !== title;
    });
    localStorage.setItem("t", JSON.stringify(newTasksArray))
    setTasks(newTasksArray);
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
