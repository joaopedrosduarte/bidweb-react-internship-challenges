export type Task = {
    id: string;
    title: string;
    createdAt: Date;
    status: "todo" | "done";
    doneAt?: Date | null;
}