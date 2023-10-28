import { TaskType } from "../model/TaskType.ts";
import Task  from "../model/Task.tsx"

interface ColumnProps {
  title: string;
  numTasks: number;
  tasks?: TaskType[];
}

export default function Column({ title, numTasks, tasks }: ColumnProps) {
  return (
    <div className="flex flex-col w-full h-full bg-basegray p-4 rounded border-lightgray border gap-4">
      <div className="flex gap-2">
        <h1 className="text-lightblue">
          {title}
        </h1>
        <span className="bg-lightgray px-2 text-xs rounded-full flex items-center ">
          {numTasks}
        </span>
      </div>
      {
        tasks?.map((task) => (
          <Task key={task.title} id={task.title} title={task.title} createdAt={task.createdAt} status={task.status} doneAt={task.doneAt} />
        ))
      }
    </div>
  );
}
