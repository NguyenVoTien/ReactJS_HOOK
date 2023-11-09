import * as types from './type';

// add Todo

export const addTodoPending = () => ({
  type: types.ADD_TODO_PENDING,
});

export const addTodoSuccess = (todo) => ({
  type: types.ADD_TODO_SUCCESS,
  payload: todo,
});

export const addTodoError = (error) => ({
  type: types.ADD_TODO_ERROR,
  payload: error,
});

// Remove Todo

export const removeTodoPending = () => ({
  type: types.REMOVE_TODO_PENDING,
});

export const removeTodoSuccess = (todoId) => ({
  type: types.REMOVE_TODO_SUCCESS,
  payload: todoId,
});

export const removeTodoError = (error) => ({
  type: types.REMOVE_TODO_ERROR,
  payload: error,
});
