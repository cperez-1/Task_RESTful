export interface Task {
    _id: string;
    title: string;
    description: string;
    completed: boolean;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
}

export interface TaskResponse {
    message: string;
    tasks: Task[]
}
