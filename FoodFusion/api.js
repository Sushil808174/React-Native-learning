// src/api.js
import axios from 'axios';

const addToCartStore = []

const API_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log(response.data.categories)
    return response.data.categories;
  } catch (error) {
    throw error;
  }
};
export const addToCartData = ()=>{
    return addToCartStore;
}

export const addDataToCart=(data)=>{
    addToCartStore.push(data);
}