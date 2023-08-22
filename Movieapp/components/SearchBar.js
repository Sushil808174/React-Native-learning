import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search for movies..."
        placeholderTextColor='#1C8D73'
        onChangeText={setQuery}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    fontSize:18,
    color:'#1C8D73',
    borderWidth: 1,
    borderRadius: 5,
    borderColor:'#1C8D73',
    padding: 8,
    marginRight: 10,
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    width:80,
    height:45,
    backgroundColor:'#1C8D73',
    borderRadius:8
  },
  buttonText:{
    fontSize:16,
    color:'#ffffff'
  }
});

export default SearchBar;
