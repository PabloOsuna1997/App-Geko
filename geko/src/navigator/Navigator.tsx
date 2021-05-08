import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/Login/LoginScreen';
import { CalculatorScreen } from '../screens/Calculator/CalculatorScreen';
import { RegistryScreen } from '../screens/Registry/RegistryScreen';

const Stack = createStackNavigator();

export const  Navigation = () => {
  return (
    <Stack.Navigator
        screenOptions = {{
            headerShown: false,
            cardStyle: {
                backgroundColor: 'white'
            }
        }}
    >
      <Stack.Screen name="LoginScreen" component = { LoginScreen } />
      <Stack.Screen name="CalculatorScreen" component = { CalculatorScreen } />
      <Stack.Screen name="RegistryScreen" component = { RegistryScreen } />
    </Stack.Navigator>
  );
}