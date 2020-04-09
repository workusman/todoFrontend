// Main Home container Which renders home component
import React, {Component} from 'react';
import {connect} from 'react-redux';
import Home from '../screens/home';
import * as todoActions from '../actions/todoActions';
import { ActivityIndicator, View } from 'react-native';

class HomeContainer extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }

  _renderActivityIndicator = () => <ActivityIndicator
    animating={true}
    color="purple"
    size="large"
  />

  render() {
    const { status } = this.props.todos;
    return(
        <Home
          status={status}
          todos={this.props.todos.data}
          createTodo={this.props.createTodo}
        />
    )
  }
}

const actions = {
  ...todoActions,
};

const mapStateToProps = state => {
  return{
    todos: state.todos,
  }
}

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(actions.fetchTodos()),
  createTodo: (todo) => dispatch(actions.createTodo(todo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeContainer);