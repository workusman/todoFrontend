import React from 'react';
import styles from '../styles/todos'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

// Formatting date to show on main
const fomatedDate = () => {
  let date = new Date();
  date = date.toString().split(`${date.getHours()}:`)[0]
  return date
}

const TodoHeader = ({ toggleTodoForm }) => (
  <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
    <View style= {{ alignItems: 'center', justifyContent: 'center',textAlign: 'left' }}>
      <Text style={styles.title}>
        {fomatedDate()}
      </Text>
    </View>
    <TouchableOpacity style={styles.newTodo} onPress={toggleTodoForm}>
      <Text style={styles.newTodoText}>
        +
      </Text>
    </TouchableOpacity>
  </View>
)

export default TodoHeader;