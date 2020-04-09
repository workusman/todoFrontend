import request from "./request";

// Get Todos
export const getTodos = () => request.get(
  'todos'
)

// Creates todos
export const createTodos = (todo) => request.post(
  'todos',
  {
    todo
  }
)

// Deletes todo
export const deleteTodos = (id) => request.delete(
  `todos/${id}`
)

// update todo
export const completeTodos = (id) => request.put(
  `todos/${id}`
)
