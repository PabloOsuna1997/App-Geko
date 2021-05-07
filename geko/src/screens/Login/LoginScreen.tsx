import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './LoginStyle';
import { StackScreenProps } from '@react-navigation/stack'

interface Props extends StackScreenProps<any, any>{}

export const LoginScreen = ( { navigation } : Props) => {
    return (
        <>
            <View style = { styles.loginContainerTop} >
                <Image
                    style = { styles.ImageCircle }
                    source={require('../../assets/circle.png')}
                ></Image>
                <Image
                    style = { styles.ImageShare }
                    source={require('../../assets/share.png')}
                ></Image>
            </View>            

            <View style = { styles.loginContainerBottom} />

            <View style = { styles.loginContainer } >
                <Image
                    style = { styles.imagenLogin }
                    source={require('../../assets/geko.png')}
                ></Image>

                <TextInput
                    placeholder="username"
                    placeholderTextColor="gray"
                    keyboardType ='default'
                    underlineColorAndroid="gray"
                    style = {styles.inputFieldUsername }
                    selectionColor = "#0473b2"

                    //autchonge,  value
                />
                <TextInput
                    placeholder="*******"
                    placeholderTextColor="gray"
                    keyboardType ='visible-password'
                    underlineColorAndroid="gray"
                    style = { styles.inputFieldPassword }
                    selectionColor = "#0473b2"

                    //autchonge,  value
                />
                    
                <View style={ styles.btnLogin }>
                        <TouchableOpacity
                            activeOpacity= {0.7}
                            onPress = { () => {navigation.replace('CalculatorScreen')}}
                        >
                            <Text style={ styles.btnLoginText } >Login</Text>
                        </TouchableOpacity>
                </View> 
            </View>  
        </>
    )
}
