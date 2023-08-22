import React,{useState} from 'react';
import { View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { deleteTodo, todos } from './TodoFunction';
import CreateTodo from './CreateTodo';

const TodoList = () => {
  const [todoList, setTodoList] = useState(todos); // Initialize with todos array

  const deleteFun = (id) => {
    deleteTodo(id);
    setTodoList(todoList.filter(todo => todo.id !== id)); // Update the state
  };
    return (
      <View style={styles.container}>
        {todos.map((todo) => (
          <View key={todo.id} style={styles.card}>
            <Text style={styles.title}>{todo.title}</Text>
            <Text style={styles.description}>{todo.description}</Text>
            <TouchableOpacity style={styles.deleteButton}
                onPress={()=>deleteFun(todo.id)}
            >
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
        <CreateTodo setTodos={setTodoList} />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    card: {
      flexDirection:'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'red',
      marginHorizontal:8,
      marginVertical:10
    },
    title: {
      flex: 1,
      color:'white',
      backgroundColor:'red',
      fontSize:24,
    },
    description: {
      flex: 2,
      fontSize:24,
    },
    deleteButton: {
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor: 'gray',
      width:60,
      height:30,
      fontSize:24,
      borderRadius: 5,
    },
  });
  
  export default TodoList;
  