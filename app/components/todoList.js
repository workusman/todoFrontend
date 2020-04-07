import React from 'react';
import TodoListItem from './todoListItem';
import { connect } from 'react-redux';
import { deleteTodo, completeTodo } from '../actions/todoActions';

const TodoList = ({todos, deleteTodo, completeTodo}) => {
  return todos.map( (todo, index) =>
    <TodoListItem
      todo={todo}
      key={index}
      deleteTodo={deleteTodo}
      completeTodo={completeTodo}
    />
  )
}

const mapDispatchToProps = dispatch => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  completeTodo: (id) => dispatch(completeTodo(id)),
})

export default connect(null, mapDispatchToProps)(TodoList);