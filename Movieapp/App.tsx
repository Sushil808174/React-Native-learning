import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SearchBar } from 'react-native-screens'
import SearchScreen from './screens/SearchScreen'
import MovieDetailsScreen from './screens/MovieDetailsScreen'
import ProfileScreen from './screens/ProfileScreen'
import LoginScreen from './screens/LoginScreen'
import RegistrationScreen from './screens/RegistrationScreen'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen name="Search" component={SearchScreen} options={{title:'Search Movie'}}/>
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegistrationScreen} />
        {/* /<Stack.Screen name='Profile' component={ProfileScreen}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})