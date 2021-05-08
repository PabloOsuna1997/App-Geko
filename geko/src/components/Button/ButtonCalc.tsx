import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './ButtonStyle';

interface Props {
    tittle: string,
    color: string,
    backgroung?: boolean,
    action: ( newNumber: string ) => void,
    position ?: boolean
}

export const ButtonCalc = ( { tittle, color = '#b4b0b1', backgroung = false, action, position = false }: Props ) => {
    return (
        <TouchableOpacity activeOpacity={0.5} style = { styles.touch }
            onPress = { () => action(tittle) }
        >
            <View style = {
            {
                ...styles.btn,
                    backgroundColor: backgroung ? "#0e9429" : "white"
                
                }
            } >
                <Text style = {{ 
                    ...styles.btnText,
                    color:  color
                    }} > { tittle } 
                </Text>

            </View>
        </TouchableOpacity>       
    )
}
