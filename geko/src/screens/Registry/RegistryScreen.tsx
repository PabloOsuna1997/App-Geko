import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { ItemRegistry } from '../../components/ItemRegistry/ItemRegistry';
import { Expression } from '../../interfaces/Expression';
import { styles } from './RegistryStyle'
import { RegistryStackParams } from '../../navigator/RegistryNavigator';
import { StackActions } from '@react-navigation/routers';
import { ScrollView } from 'react-native-gesture-handler';


interface Props extends StackScreenProps<RegistryStackParams, 'RegistryScreen'>{
}

const renderItem = (expression: Expression, key: number) => {
    
    return (
        <ItemRegistry key={expression.number} number={expression.number + ''} expression = {expression.expression}/>
    )
}

export const RegistryScreen = ({ route, navigation} : Props) => {
    const { list, key } = route.params;
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
                onPress = { () => {
                    navigation.replace('CalculatorScreen', {
                        list: list,
                        key: key
                    })
                }}
            >
                <Image
                    style = { styles.caluclator }
                    source={require('../../assets/calculator.png')}
                ></Image>
            </TouchableOpacity>
            <Text style={styles.txt}> REPORT </Text>

            <ScrollView style = { styles2.container }>
                {
                    (list.length > 0) ?
                    list.map(expression => renderItem(expression, key))
                    :
                    <Text style = {styles.txtNot}>No hay historial</Text>
                }
            </ScrollView>
            
    </>
    )
}

const styles2 = StyleSheet.create({
    container: {
        marginTop: 120,
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    text: {
        fontSize: 42,
    },
  });
  