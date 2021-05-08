import React from 'react'
import { Text, View } from 'react-native';
import { styles } from './ItemRegistryStyle';


interface Props {
    number: string,
    expression: string,
}

export const ItemRegistry = ( {number, expression } : Props) => {
    console.log(number)
    return (
        <View key={number} style = { styles.item }>
            <View style = { styles.number }>
                <Text style={styles.numberTxt}>{ number }</Text>
            </View>
            <Text style = { styles.txt } >{ expression }</Text>
        </View>
    )
}
