import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TodoList from './TodoList';
import CreateTodo from './CreateTodo';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TodoList" component={TodoList} />
      <Stack.Screen name="CreateTodo" component={CreateTodo} />
    </Stack.Navigator>
  );
};

export default Navigation;
