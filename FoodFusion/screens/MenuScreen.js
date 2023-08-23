// src/screens/MenuScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, Dimensions,Button } from 'react-native';
import { addDataToCart, fetchCategories } from '../api';

const screenWidth = Dimensions.get('window').width;

const MenuScreen = ({navigation}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories()
      .then(data => setCategories(data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  const addToCart = (dish) => {
    const obj = {
      idCategory: dish.idCategory,
      strCategory: dish.strCategory,
      strCategoryDescription: dish.strCategoryDescription,
      strCategoryThumb: dish.strCategoryThumb,
      quantity:1,
      price:99
    };
    console.log(obj)
    addDataToCart(obj)
  };

  const renderItem = ({ item }) => (
    <View style={styles.categoryItem}>
      <Image source={{ uri: item.strCategoryThumb }} style={styles.categoryImage} />
      <Text style={styles.categoryName}>{item.strCategory}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Food Fusion Menu</Text>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
      {/* <Text>{categories[0].strCategory}</Text> */}
      {/* {categories.map((ele)=>(
        <Text>{ele.idCategory}</Text>
      ))} */}
      <FlatList
        data={categories}
        keyExtractor={item => item.idCategory}
        renderItem={renderItem}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  listContainer: {
    alignItems: 'center',
  },
  categoryItem: {
    margin: 10,
    alignItems: 'center',
  },
  categoryImage: {
    width: screenWidth / 3,
    height: screenWidth / 3,
    borderRadius: screenWidth / 6,
  },
  categoryName: {
    marginTop: 10,
    textAlign: 'center',
  },
});

export default MenuScreen;
