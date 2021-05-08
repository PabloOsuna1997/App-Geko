import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistryScreen } from '../screens/Registry/RegistryScreen';
import { Expression } from '../interfaces/Expression';
import { CalculatorScreen } from '../screens/Calculator/CalculatorScreen';


export type RegistryStackParams = {
    CalculatorScreen: { key: number, list: Expression[]}
    RegistryScreen: { key: number, list: Expression[]}
}


const Stack = createStackNavigator<RegistryStackParams>();


export const RegistryNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white'
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                }
            }}
        >
            <Stack.Screen name="RegistryScreen" component = { RegistryScreen } />
            <Stack.Screen name="CalculatorScreen" component = { CalculatorScreen } />
        </Stack.Navigator>
    )
}