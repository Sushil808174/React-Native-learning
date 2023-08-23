import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage

import RegistrationScreen from './screens/RegistrationScreen';
import LoginScreen from './screens/LoginScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen'; // Add your main application screens

const AuthStack = createStackNavigator();
const MainStack = createBottomTabNavigator();

const AuthFlow = () => {
  return (
    <AuthStack.Navigator initialRouteName="Registration">
      <AuthStack.Screen name="Registration" component={RegistrationScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};

const MainFlow = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Search" component={SearchScreen} />
      <MainStack.Screen name="Profile" component={ProfileScreen} />
      {/* Add more screens for your main application */}
    </MainStack.Navigator>
  );
};

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication(); // Check if the user is authenticated on app launch
  }, []);

  const checkAuthentication = async () => {
    // Check if the user is authenticated (e.g., token stored in AsyncStorage)
    const token = await AsyncStorage.getItem('token');
    setIsAuthenticated(!!token);
  };

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainFlow /> : <AuthFlow />}
    </NavigationContainer>
  );
};

export default App;
