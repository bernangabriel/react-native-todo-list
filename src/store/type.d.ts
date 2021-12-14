import Todo from "../models/todo.model";

type TodoState = {
    todos: Todo[]
};

type TodoAction = {
    type: string;
    payload: any
};