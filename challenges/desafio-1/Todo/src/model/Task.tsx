import { useState } from "react";
import { TaskType } from "../model/TaskType.ts";
import dayjs from "dayjs";

export default function Task({ title, createdAt, status, doneAt }: TaskType) {
  const createdDayAndMonth = dayjs(createdAt).format("MMM DD, YYYY");
  const DoneDayAndMonth = dayjs(doneAt).format("MMM DD, YYYY");
  const [isSelected, setIsSelected] = useState(false);

  function taskSelected() {
    setIsSelected(true);
  }

  function unselecting() {
    setIsSelected(false);
  }

  function handleChangeTaskStatus() {
    console.log("a");
  }

  return (
    <button
      className="text-left border-lightgray border rounded-lg flex flex-col"
      onBlur={unselecting}
      onFocus={taskSelected}
    >
      <div className="flex flex-col p-4 gap-3">
        <h1
          className={`text-sm font-normal ${
            status == "done" ? "line-through text-textgray" : null
          }`}
        >
          {title}
        </h1>
        <div className="flex gap-4">
          <h2 className="text-xs text-textgray">
            Created: {createdDayAndMonth}
          </h2>
          {status === "done"
            ? doneAt && (
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
        onBlur={unselecting}
        onFocus={taskSelected}
      >
        <div className={`w-full ${status === "done" ? "bg-red-500" : "bg-lightblue" } border border-b-0 border-l-0 border-r-[0.5px] border-lightgray rounded-bl-md flex justify-center`} onClick={handleChangeTaskStatus}>
          {status === "done" ? "Uncheck" : "Check"} 
        </div>
        <div className="w-full bg-[#8284FA] border border-b-0 border-r-0 border-l-[0.5px] border-lightgray rounded-br-md flex justify-center">
          Editar
        </div>
      </div>
    </button>
  );
}
