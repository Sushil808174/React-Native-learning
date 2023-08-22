import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import MovieDetails from '../components/MovieDetails';

const MovieDetailsScreen = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <MovieDetails movie={movie} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default MovieDetailsScreen;
