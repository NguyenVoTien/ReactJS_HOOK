import { v4 as uuid } from 'uuid';
import * as TYPES from './ActionType';
const initialState = {
  todos: [
    {
      name: 'Nguyễn Tiến Tài',
      completed: false,
      id: uuid,
    },
    {
      name: 'Nguyễn Võ Tiền',
      completed: false,
      id: uuid,
    },
    {
      title: 'Lê Ngọc Trâm Anh',
      completed: false,
      id: uuid,
    },
    {
      name: 'Nguyễn Quốc Hào',
      completed: false,
      id: uuid,
    },
    {
      name: 'Nguyễn Thanh Phong',
      completed: false,
      id: uuid,
    },
    {
      name: 'Trương Tấn Ngĩa',
      completed: false,
      id: uuid,
    },
    {
      name: 'Tấn Nguyễn',
      completed: false,
      id: uuid,
    },
    {
      name: 'Hải Nam',
      completed: false,
      id: uuid,
    },
  ],
};
const TodoReducer = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case TYPES.ADD_TODO:
      //logic add todo
      return {
        ...state,
      };
    case TYPES.REMOVE_TODO:
      //logic remove todo
      return {
        ...state,
      };
    default:
      break;
  }
};
export default TodoReducer;
