import 'react-native-gesture-handler';
import React from 'react'
import { LoginScreen } from './src/screens/Login/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigator/Navigator';
import { RegistryScreen } from './src/screens/Registry/RegistryScreen';


const App = () => {
    return (        
        <NavigationContainer>
            <Navigation></Navigation>
        </NavigationContainer>
    )
}

export default App
