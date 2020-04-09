// Todo form to for new todo
import React from 'react';
import styles from '../styles/todos'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard
} from 'react-native';

const TodoForm = ({handleInputChange, createTodo, todo , toggleTodoForm}) => (
  <View style={{flexDirection: 'column'}}>

  <View style={styles.newTodoContainer}>
    <TextInput multiline onChange={handleInputChange} style={styles.newTodoTextInput} />
  </View>

  <TouchableOpacity
    style={styles.saveTodo}
    onPress={ () => {
      Keyboard.dismiss();
      createTodo(todo);
      toggleTodoForm();
    }}
  >
    <Text style={styles.saveTodoText}> Save </Text>
  </TouchableOpacity>

  </View>
)

export default TodoForm;