import React, { useRef, useState } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonCalc } from '../../components/Button/ButtonCalc';
import { styles } from './CalculatorStyle';
import { useCalculatorHook } from '../../hooks/useCalculator';
import { StackScreenProps } from '@react-navigation/stack';

//colors 
//#b4b0b1   gris numeros
//#60bc73   verde 

interface Props extends StackScreenProps<any, any>{}

export const CalculatorScreen = ({navigation}: Props) => {

    const {  number,
        previusNumber,
        registry,
        concatNumber,
        calc,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        btnModulo,
        clear } = useCalculatorHook()

    return (
        <>
            <View style={ styles.calculatorContainer }>                                             
                
                <View style = { styles.firstContainer }>                       
                    <Image 
                        style={ styles.imagenLogo}

                        source={require('../../assets/geko.png')}
                    ></Image>
                    
                    <TouchableOpacity
                        style={ styles.botonReturn}
                        onPress = {() => { navigation.replace('RegistryScreen')}}
                    >
                        <View style={ styles2.fab }>
                            <Text style = { styles2.fabText}> &larr; </Text>
                        </View>
                    </TouchableOpacity> 
                    <Text style = { styles.tittle }> Calculator </Text>
                </View>
                
                <Text style ={ styles.resultLittle }            
                    numberOfLines= {1}
                    adjustsFontSizeToFit
                >
                    { (previusNumber !== '0') ? previusNumber: '' }
                </Text>
                <Text 
                    style ={ styles.resultado }
                    numberOfLines= {1}
                    adjustsFontSizeToFit
                > { number } </Text>

                <View style = { styles.btnsContainer }>
                    <View style = {styles.btnsRow }>
                        {/*boton */}
                        <ButtonCalc tittle = "C" color = "#0e9429" action = { clear }/>
                        <ButtonCalc tittle = "CL" color = "#0e9429" action = { clear }/>
                        <ButtonCalc tittle = "%"  color = "#0e9429" action = { btnModulo }/>
                        <ButtonCalc tittle = "/" color = "#0e9429" action = { btnDividir }/>
                    </View>

                    <View style = {styles.btnsRow }>
                        {/*boton */}
                        <ButtonCalc tittle = "7" color = "#b4b0b1"  action = { concatNumber } />
                        <ButtonCalc tittle = "8" color = "#b4b0b1" action = { concatNumber }/>
                        <ButtonCalc tittle = "9"  color = "#b4b0b1" action = { concatNumber }/>
                        <ButtonCalc tittle = "*" color = "#0e9429" action = { btnMultiplicar }/>
                    </View>

                    <View style = {styles.btnsRow }>
                        {/*boton */}
                        <ButtonCalc tittle = "4" color = "#b4b0b1" action = { concatNumber }/>
                        <ButtonCalc tittle = "5" color = "#b4b0b1" action = { concatNumber }/>
                        <ButtonCalc tittle = "6"  color = "#b4b0b1" action = { concatNumber }/>
                        <ButtonCalc tittle = "-" color = "#0e9429" action = { btnRestar }/>
                    </View>

                    <View style = {styles.btnsRow }>
                        {/*boton */}
                        <ButtonCalc tittle = "1" color = "#b4b0b1" action = { concatNumber }/>
                        <ButtonCalc tittle = "2" color = "#b4b0b1" action = { concatNumber }/>
                        <ButtonCalc tittle = "3"  color = "#b4b0b1" action = { concatNumber }/>
                        <ButtonCalc tittle = "+" color = "#0e9429" action = { btnSumar }/>
                    </View>

                    <View style = {styles.btnsRow }>
                        {/*boton */}
                        <ButtonCalc tittle = "%" color = "#0e9429" action = { btnModulo }/>
                        <ButtonCalc tittle = "0" color = "#b4b0b1"  action = { concatNumber } />
                        <ButtonCalc tittle = "."  color = "#b4b0b1" action = { concatNumber }/>
                        <ButtonCalc tittle = "=" color = "white" backgroung action = { calc }/>
                    </View>

                </View>
            
            </View>
        </>
    )
}


const styles2 = StyleSheet.create({
    fabLocationRight: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationLeft: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fab: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
    },
    fabText: {
        color: '#b4b0b1',
        fontSize: 45,
        fontWeight: 'bold',
        alignSelf: 'center'
    }
})
