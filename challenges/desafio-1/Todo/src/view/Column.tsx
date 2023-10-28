import TaskComponent from "./TaskComponent";
import { Task } from "../model/Task";

interface ColumnProps {
  title: string;
  numTasks: number;
  tasks?: Task[];
  className?: string;
  onHandleChangeTaskStatus: (title: string) => void;
  onHandleChangeTaskTitle: (title: string, lastTitle: string) => void;
  onHandleDeleteTask: (title: string) => void;
}

export default function Column({
  title,
  numTasks,
  tasks,
  className = "text-lightblue",
  onHandleChangeTaskStatus,
  onHandleChangeTaskTitle,
  onHandleDeleteTask
}: ColumnProps) {
  return (
    <div className="flex flex-col w-full h-full bg-basegray p-4 rounded border-lightgray border gap-4">
      <div className="flex gap-2">
        <h1 className={`${className}`}>{title}</h1>
        <span className="bg-lightgray px-2 text-xs rounded-full flex items-center ">
          {numTasks}
        </span>
      </div>
      {tasks?.map((task) => (
        <TaskComponent
          key={task.title}
          task={task}
          onHandleChangeTaskStatus={onHandleChangeTaskStatus}
          onHandleChangeTaskTitle={onHandleChangeTaskTitle}
          onHandleDeleteTask={onHandleDeleteTask}
        />
      ))}
    </div>
  );
}
