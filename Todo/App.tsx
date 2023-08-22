import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import TodoList from './components/TodoList';

function App() {
  const darkmode = useColorScheme() === 'dark';

  const bgColorContainer = {
    backgroundColor: darkmode ? 'black' : 'white',
  };

  const textColor = {
    color: darkmode ? 'white' : 'black',
  };

  return (
    <View style={styles.container}>
      <TodoList/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});

export default App;
