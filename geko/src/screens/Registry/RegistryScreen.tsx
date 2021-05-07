import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { ItemRegistry } from '../../components/ItemRegistry/ItemRegistry';
import { styles } from './RegistryStyle'


interface Props extends StackScreenProps<any, any>{}

const test1:Expression = {
    number: 1,
    expression: '1+1 =2',
}


const test2:Expression = {
    number: 2,
    expression: '3-1 =2',

}

const list:Expression[] = [ test1, test2 ];

interface Expression{
    number:         number;
    expression:      string;
}

const renderItem = (expression: Expression) => {
    return (
        <ItemRegistry key={expression.number} number={expression.number + ''} expression = {expression.expression}/>
    )
}

export const RegistryScreen = ({ navigation } : Props) => {
    return (
        <>
            <View style = { styles.top}>
                <Image
                style = { styles.gekoReg }
                    source={require('../../assets/geko.png')}
                ></Image>
            </View>
            <TouchableOpacity
                style = { styles.btnCalculator}
                activeOpacity= {0.7}
                onPress = { () => {navigation.replace('CalculatorScreen')}}
            >
                <Image
                    style = { styles.caluclator }
                    source={require('../../assets/calculator.png')}
                ></Image>
            </TouchableOpacity>
            <Text style={styles.txt}> REPORT </Text>
            
            <View style = { styles.container }>
                {
                    list.map(expression => renderItem(expression))
                }
            </View>
            
    </>
    )
}
