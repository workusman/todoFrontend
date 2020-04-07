import React, {Component} from 'react';
import {
  ScrollView,
  View,
  Text,
} from 'react-native';
import styles from '../styles/todos';
import TodoHeader from '../components/todoHeader';
import TodoList from '../components/todoList';
import TodoForm from '../components/todoForm';


export default class Home extends Component {
  constructor(props){
    super(props)
    this.state = {
      showTodoForm: false,
      todo: {},
      checked: true
    }
  }

  toggleTodoForm = () => {
    this.setState((prevState) => ({
      showTodoForm: !prevState.showTodoForm,
    }))
  }

  handleInputChange = (event) => {
    const text =  event.nativeEvent.text;
    this.setState({todo: {task: text}})
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.todos}>
          <TodoHeader toggleTodoForm={this.toggleTodoForm}/>
          { this.props.todos.length > 0 ?
            <ScrollView>
              <TodoList todos={this.props.todos} />
            </ScrollView>
            :
            <Text>
              Todo list is empty
            </Text>
          }
          {
            this.state.showTodoForm &&
            <TodoForm
              handleInputChange={this.handleInputChange}
              todo={this.state.todo}
              toggleTodoForm={this.toggleTodoForm}
              createTodo={this.props.createTodo}
            />
          }
        </View>
      </View>
    );
  }
}
