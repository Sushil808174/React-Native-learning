import React, { useState } from 'react';
import { View, FlatList, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import SearchBar from '../components/SearchBar';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    try {
      const apiKey = 'e8921bca';
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${apiKey}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setSearchResults(data.Search);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setSearchResults([]);
    }
  };

  const handleMovieDetails = (movie) => {
    navigation.navigate('MovieDetails', { movie });
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleMovieDetails(item)} style={styles.movieItem}>
            <Image source={{ uri: item.Poster }} style={styles.moviePoster} />
            <View style={styles.movieDetails}>
              <Text style={styles.movieTitle}>{item.Title}</Text>
              <Text style={styles.movieYear}>Year: {item.Year}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  moviePoster: {
    width: 80,
    height: 120,
    marginRight: 10,
  },
  movieDetails: {
    flex: 1,
  },
  movieTitle: {
    color:'#E6425E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  movieYear:{
    color:'#03203C',
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default SearchScreen;
