import { StyleSheet, Dimensions } from 'react-native';
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;
 export default StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    backgroundColor:"purple",
    alignItems:"stretch",
    paddingTop: Math.round((SCREEN_HEIGHT * 0.09 )),
    paddingLeft: Math.round((SCREEN_WIDTH * 0.05 )),
    paddingRight: Math.round((SCREEN_WIDTH * 0.05 )),
    paddingBottom: Math.round((SCREEN_HEIGHT * 0.05 )),
  },

  title: {
    fontSize:20,
    color:"#000",
  },

  todos: {
    backgroundColor:"white",
    flex: 1,
    borderRadius: 10,
    borderRadius: 10,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
  },

  newTodo: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "purple",
    padding: 10,
    fontWeight: 'bold',
    height: 60,
    width: 60,
    borderRadius: 120,
  },

  todoListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: "purple",
    borderWidth: 1,
  },

  todoItemFont: {
    fontSize: 20,
    flexWrap: 'wrap'
  },

  strikeThrough: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: 'purple'
  },

  newTodoText: {
    color: 'white',
    fontSize: 30,
  },

  newTodoTextInput: {
    height: Math.round((SCREEN_HEIGHT * 0.07 )),
    width: Math.round((SCREEN_WIDTH * 0.7 )),
    textAlign: "left",
    borderColor: 'gray',
    borderWidth: 1,
    borderColor: "purple",
  },

  saveTodo: {
    padding: 10,
    margin: 12,
    backgroundColor: "purple",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100 * 0.5
  },

  saveTodoText: {
    color: 'white',
    fontSize: 14,
    fontWeight: "bold",
  },

  newTodoContainer: {
    alignItems: "center",
    justifyContent: "center"
  }
 })
