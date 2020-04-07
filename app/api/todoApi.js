import request from "./request";

export const getTodos = () => request.get(
  'todos'
)

export const createTodos = (todo) => request.post(
  'todos',
  {
    todo
  }
)

export const deleteTodos = (id) => request.delete(
  `todos/${id}`
)

export const completeTodos = (id) => request.put(
  `todos/${id}`
)
