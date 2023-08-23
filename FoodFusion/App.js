// App.js or App.tsx

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuScreen from './screens/MenuScreen';
import CartScreen from './screens/CartScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Menu" component={MenuScreen} options={{ title: 'Food Fusion' }} />
        <Stack.Screen name='Cart' component={CartScreen} options={{title: 'Shopping Cart'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
