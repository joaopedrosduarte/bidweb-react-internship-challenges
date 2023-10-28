export type TaskType = {
    id: string;
    title: string;
    createdAt: Date;
    status: "todo" | "done";
    doneAt?: Date | null;
}