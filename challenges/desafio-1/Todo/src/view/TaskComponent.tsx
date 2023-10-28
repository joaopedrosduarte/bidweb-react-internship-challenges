import ChangeTaskModal from "../view/ChangeTaskModal.tsx";
import { Task } from "../model/Task.ts";
import { useState } from "react";
import dayjs from "dayjs";

interface TaskComponentProps {
  task: Task;
  onHandleChangeTaskStatus: (title: string) => void;
  onHandleChangeTaskTitle: (title: string, lastTitle: string) => void;
  onHandleDeleteTask: (title: string) => void;
}

export default function TaskComponent({
  task,
  onHandleChangeTaskStatus,
  onHandleChangeTaskTitle,
  onHandleDeleteTask,
}: TaskComponentProps) {
  const createdDayAndMonth = dayjs(task.createdAt).format("MMM DD, YYYY");
  const DoneDayAndMonth = dayjs(task.doneAt).format("MMM DD, YYYY");
  const [isSelected, setIsSelected] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  function taskSelected() {
    setIsSelected(true);
  }

  function taskUnselected() {
    setIsSelected(false);
  }

  function handleChangeTaskStatus() {
    onHandleChangeTaskStatus(task.title);
  }

  return (
    <>
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
          className={`flex w-full rounded-md ${isSelected ? null : "hidden"}`}
        >
          <div
            className={`w-full ${
              task.status === "done" ? "bg-red-500" : "bg-lightblue"
            } border border-b-0 border-l-0 border-r-[0.5px] border-lightgray rounded-bl-md flex justify-center`}
            onClick={handleChangeTaskStatus}
          >
            {task.status === "done" ? "Uncheck" : "Check"}
          </div>
          <div
            className="w-full bg-[#8284FA] border border-b-0 border-r-0 border-l-[0.5px] border-lightgray rounded-br-md flex justify-center"
            onClick={() => setIsChanging(true)}
          >
            Editar
          </div>
        </div>
      </button>
      {isChanging ? (
        <ChangeTaskModal
          setIsModalOpen={setIsChanging}
          onHandleChangeTaskTitle={onHandleChangeTaskTitle}
          onHandleTaskDelete={onHandleDeleteTask}
          lastTitle={task.title}
        />
      ) : null}
    </>
  );
}
