import { useState } from "react";
import { TaskType } from "../model/TaskType.ts";
import dayjs from "dayjs";

interface TaskProps {
  task: TaskType,
  onHandleChangeTaskStatus: (title:string) => void;
}

export default function Task({ task, onHandleChangeTaskStatus }: TaskProps) {
  const createdDayAndMonth = dayjs(task.createdAt).format("MMM DD, YYYY");
  const DoneDayAndMonth = dayjs(task.doneAt).format("MMM DD, YYYY");
  const [isSelected, setIsSelected] = useState(false);

  function taskSelected() {
    setIsSelected(true);
  }

  function taskUnselected() {
    setIsSelected(false);
  }

  function handleChangeTaskStatus(){
    onHandleChangeTaskStatus(task.title);
  }

  return (
    <button
      className="text-left border-lightgray border rounded-lg flex flex-col"
      onBlur={taskUnselected}
      onFocus={taskSelected}
    >
      <div className="flex flex-col p-4 gap-3">
        <h1
          className={`text-sm font-normal ${
            task.status == "done" ? "line-through text-textgray" : null
          }`}
        >
          {task.title}
        </h1>
        <div className="flex gap-4">
          <h2 className="text-xs text-textgray">
            Created: {createdDayAndMonth}
          </h2>
          {task.status === "done"
            ? task.doneAt && (
                <h2 className="text-xs text-textgray">
                  Done at: {DoneDayAndMonth}
                </h2>
              )
            : null}
        </div>
      </div>
      <div
        className={`flex w-full rounded-md ${
          isSelected ? null : "hidden"
        }`}
        onBlur={taskUnselected}
        onFocus={taskSelected}
      >
        <div className={`w-full ${task.status === "done" ? "bg-red-500" : "bg-lightblue" } border border-b-0 border-l-0 border-r-[0.5px] border-lightgray rounded-bl-md flex justify-center`} onClick={handleChangeTaskStatus}>
          {task.status === "done" ? "Uncheck" : "Check"} 
        </div>
        <div className="w-full bg-[#8284FA] border border-b-0 border-r-0 border-l-[0.5px] border-lightgray rounded-br-md flex justify-center">
          Editar
        </div>
      </div>
    </button>
  );
}
