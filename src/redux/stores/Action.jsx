import * as types from './type';

export const addTodoAction = (todo) => {
  return {
    type: types.ADD_TODO,
    payload: todo,
  };
};

export const deleteTodoAction = (todoId) => {
  return {
    type: types.DELETE_TODO,
    payload: todoId,
  };
};
