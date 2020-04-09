import * as types from '../actionTypes/todo';
import {
  getTodos,
  createTodos,
  deleteTodos,
  completeTodos
} from '../api/todoApi';

export function fetchTodos() {
  return async dispatch => {
    dispatch({type: types.FETCH_TODOS});
    try {
      let response = await getTodos();
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      dispatch({type: types.FETCH_TODOS_SUCCESS, data: response.data});

    }
    catch(error) {
      dispatch({type: types.FETCH_TODOS_FAILURE, error});
    }
  };
};

export function createTodo(todo) {
  return async dispatch => {
    try {
      let response = await createTodos(todo);
      if(response.status !== 200) {
        throw new Error('CREATE TODO ERROR')
      }
      dispatch(fetchTodos());
    }
    catch(error){
      console.log("---error", error)
      dispatch({type: types.CREATE_TODO_FAILURE, error});
    }
  }
}

export function deleteTodo(id) {
  return async dispatch => {
    try {
      let response = await deleteTodos(id);
      if(response.status !== 200) {
        throw new Error('DELETE TODO ERROR')
      }
      dispatch(fetchTodos());
    }
    catch(error){
      console.log("---eror", error)
      dispatch({type: types.DELETE_TODO_FAILURE, error});
    }
  }
}

export function completeTodo(id) {
  return async dispatch => {
    try {
      let response = await completeTodos(id);
      if(response.status !== 200) {
        throw new Error('Update TODO Error')
      }
      dispatch(fetchTodos());
    }
    catch(error){
      console.log("---error", error)
      dispatch({type: types.UPDATE_TODO_FAILURE, error});
    }
  }
}