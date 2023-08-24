import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { addToCartData } from '../api';

const screenWidth = Dimensions.get('window').width;

const CartScreen = ({ navigation }) => {
  const data = addToCartData();
  const [cartItems, setCartItems] = useState(data);

  const increaseQuantity = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (itemId) => {
    const updatedCart = cartItems.map(item =>
      item.id === itemId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {cartItems.map(item => (
        <View key={item.idCategory} style={styles.cartItem}>
          <Image
            source={{
              uri: item.strCategoryThumb,
            }}
            style={styles.categoryImage}
          />
          <View style={styles.itemContent}>
            <Text style={styles.itemName}>{item.strCategory}</Text>
            <Text style={styles.itemQuantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.itemPrice}>Price: ${item.price}</Text>
            <View style={styles.btn}>
              <TouchableOpacity style={styles.incre} onPress={() => increaseQuantity(item.id)}>+</TouchableOpacity>
              <TouchableOpacity style={styles.decr} onPress={() => decreaseQuantity(item.id)}>-</TouchableOpacity>
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 15,
    borderColor:'#000000',
    paddingHorizontal:8,
    paddingVertical:10,
    elevation:5,
    borderWidth:2
    
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 15,
  },
  itemContent: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemQuantity: {
    marginTop: 5,
  },
  itemPrice: {
    marginTop: 5,
  },
  btn: {
    flexDirection: 'row',
  },
  incre: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    width: 30,
    height: 30,
    borderRadius: 15,
    elevation: 4,
    marginRight: 10,
  },
  decr: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    width: 30,
    height: 30,
    borderRadius: 15,
    elevation: 4,
  },
});

export default CartScreen;
