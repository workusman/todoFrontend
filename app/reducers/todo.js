// WRITTEN FOR ONLY FETCH AND CREATE ACTIONS
const INITIAL_STATE = {
  data: [],
  status: '',
  error: '',
  createStatus: '',
  createError: '',
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        status: 'loading',
        error: null,
      };

    case 'FETCH_TODOS_SUCCESS':
      return {
        ...state,
        status: 'success',
        data: action.data,
        error: null,
      };

    case 'FETCH_TODOS_FAILURE':
      return {
        ...state,
        status: 'failure',
        error: action.error,
      };

      case 'CREATE_TODO':
        return {
          ...state,
          createStatus: 'loading',
          createError: null,
        };

      case 'CREATE_TODO_SUCCESS':
        return {
          ...state,
          createStatus: 'success',
          data: [...state.data, action.data],
          createError: null,
        };

      case 'CREATE_TODO_FAILURE':
        return {
          ...state,
          createStatus: 'failure',
          createError: action.error,
        };

    default:
      return state;
  }
};