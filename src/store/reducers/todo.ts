import { TodoAction, TodoState } from "../type";
import TodoActionTypes from "../actionTypes/todo";
import Todo from "../../models/todo.model";

const initialState: TodoState = {
    todos: []
};

const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.ADD_TODO:
            const newTodo: Todo = {
                title: action.payload,
                addedDate: new Date(),
                isCompleted: false
            };
            return { ...state, todos: [...state.todos, newTodo] }
        case TodoActionTypes.REMOVE_TODO:
            return {
                todos: [...state.todos.filter((_, todoIndex) => todoIndex !== action.payload)]
            }
        default:
            return state
    }
}

export default todoReducer;