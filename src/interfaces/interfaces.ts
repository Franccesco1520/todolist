
export type PriorityType = "default" | "low" | "medium" | "high"
export type PriorityValues = {
    value: PriorityType;
    message: string;
}

export type TodoProps = {
    title: string;
    priority: PriorityType;
    description: string;
    done?: boolean;
}

export type AppProps ={
    todos: TodoProps[];
    setTodos: (todo: TodoProps[]) => void;
}

export type ErrorProps = {
    message: string;
}

export type ListProps = {
    todos: TodoProps[]
}

export type Todo = {
    todo: TodoProps
}

