import TodoActionTypes from '../actionTypes/todo';
import { TodoAction } from '../type';

export function addTodo(title: string) {
    const action: TodoAction = {
        type: TodoActionTypes.ADD_TODO,
        payload: title
    }
    return action;
}

export function removeTodo(itemIndex: number) {
    const action: TodoAction = {
        type: TodoActionTypes.REMOVE_TODO,
        payload: itemIndex
    };
    return action;
}