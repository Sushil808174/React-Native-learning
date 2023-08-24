import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const MovieDetails = ({ movie }) => {
  return (
    
    <View style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.poster} />
      <Text style={styles.title}>{movie.Title}</Text>
      <Text style={styles.text}>Released: {movie.Year}</Text>
      <Text style={styles.text}>Plot: {movie.Plot}</Text>
      <Text style={styles.text}>Ratings: {movie.imdbRating}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    alignItems: 'center',
    padding: 20,
    elevation:8,
    shadowOffset:{
        width:2,
        height:2
    },
    shadowColor:"#000000"
  },
  poster: {
    width: 200,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'#03203C'
  },
  text:{
    color:'#207398'
  }
});

export default MovieDetails;
