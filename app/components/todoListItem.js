import React, {useState} from 'react';
import styles from '../styles/todos'
import {
  View,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import CheckBox from 'react-native-check-box';
import GestureRecognizer from 'react-native-swipe-gestures';

const handleSwipeLeft = (todo, deleteTodo) => {
  Alert.alert(
    'Confirm',
    'Do you want to delete',
    [
      {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      {text: 'OK', onPress: () => deleteTodo(todo.id)},
    ],
  )
}

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 100,
  gestureIsClickThreshold: 5
}

const TodoListItem = ({todo, deleteTodo, completeTodo}) => {
  return (
    <GestureRecognizer
      onSwipeLeft={ () => handleSwipeLeft(todo, deleteTodo) }
      config={config}
    >
      <View style={[styles.todoListContainer] }>
        <View style={{ flexDirection: "row" }}>
          <CheckBox
            style={{ flexDirection: "row"}}
            onClick={ () => completeTodo(todo.id) }
            isChecked={ todo.completed }
          />

          <TouchableOpacity onLongPress={ () => deleteTodo(todo.id) } >
            <Text style={[styles.todoItemFont, todo.completed && styles.strikeThrough]}>{todo.task}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </GestureRecognizer>
  )
}

export default TodoListItem;