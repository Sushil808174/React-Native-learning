import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { createTodo } from './TodoFunction';

const CreateTodo = ({ setTodos }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleCreateTodo = () => {
    if (title && description) {
      createTodo(title, description);
      setTitle('');
      setDescription('');

      // Trigger a re-render of the TodoList component by updating the todos state
      setTodos((prevTodos) => [...prevTodos]);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Title"
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button title="Create Todo" onPress={handleCreateTodo} />
    </View>
  );
};

export default CreateTodo;
