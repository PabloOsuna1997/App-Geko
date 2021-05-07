import React, { useRef, useState } from 'react'
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { ButtonCalc } from '../../components/Button/ButtonCalc';
import { styles } from './CalculatorStyle';
import { useCalculatorHook } from '../../hooks/useCalculator';
import { StackScreenProps } from '@react-navigation/stack';

//colors 
//#b4b0b1   gris numeros
//#60bc73   verde 

enum Operadores {
    suma, resta, multiplicacion, division, modulo, igual
}

interface Props extends StackScreenProps<any, any>{}

export const CalculatorScreen = ({navigation}: Props) => {

    
    const [number, setNumber] = useState('0')
    const [previusNumber, setPreviusNumber] = useState('0')
    const [registry, setRegistry] = useState('0')
    const ultimoOperador = useRef<Operadores>();

    const concatNumber = ( newNumber: string) => {
        

        if (number.includes('.') && newNumber === '.' ) return

        if((number.includes('+') || number.includes('-') || 
                number.includes('*') || number.includes('/') || 
                number.includes('%') )  && 
                (newNumber === '+' || newNumber === '-' || 
                newNumber === '*' || newNumber === '/' || 
                newNumber === '%' )) return

        
        if(number.startsWith('0')){

            if(newNumber === '.'){
                setNumber(number + newNumber)
                setRegistry( number + newNumber)
            }
            else if(newNumber === '0' && number.includes('.')){
                setNumber(number + newNumber)
                setRegistry( number + newNumber)
            }
            else if(newNumber !== '0' && !number.includes('.')){
                setNumber(newNumber)
                setRegistry(newNumber)
            }
            else if(newNumber === '0' && !number.includes('.')){
                setNumber(number)
                setRegistry( number)
            }else{
                setNumber(number + newNumber)
                setRegistry( number + newNumber)
            }

        }else{
            setNumber(number + newNumber)
            setRegistry( number + newNumber)
        }
        
    }

    const clear = ( ) => {
        setNumber('0')
        setPreviusNumber('0')
        setRegistry('')
    }
 
    const calc = () => {

        const num1 = Number(number)
        const num2 = Number(previusNumber)

        switch (ultimoOperador.current) {
            case Operadores.suma:                
                    setNumber((num1 + num2) + '')
                    setPreviusNumber(previusNumber + ' + ' + number)
                    setRegistry( previusNumber + ' + ' + number + ' = ' + (num1 + num2))
                break;
            case Operadores.resta:                
                setNumber((num2 - num1) + '')
                setPreviusNumber(previusNumber + ' - ' + number)
                setRegistry( previusNumber + ' - ' + number + ' = ' + (num2 - num1))
            break;
            
            case Operadores.multiplicacion:                
                setNumber((num1 * num2) + '')
                setPreviusNumber(previusNumber + ' * ' + number)
                setRegistry( previusNumber + ' * ' + number + ' = ' + (num1 * num2))
            break;

            case Operadores.division: 
                if(num1 !== 0){              
                    setNumber((num2 / num1) + '')
                    setPreviusNumber(previusNumber + ' / ' + number)
                    setRegistry( previusNumber + ' / ' + number + ' = ' + (num2 + num1))
                }else{
                    setNumber('0')
                    setPreviusNumber('0')
                    setPreviusNumber('0')
                }
            break;
            default:
                break;
        }
        ultimoOperador.current = Operadores.igual
    }

    const subirNUmero = () => {
        setPreviusNumber(number) 
        setNumber('0')
    }

    const btnDividir = () => {
        subirNUmero()
        ultimoOperador.current = Operadores.division
    }

    const btnMultiplicar = () => {
        subirNUmero()
        ultimoOperador.current = Operadores.multiplicacion
    }

    const btnSumar = () => {
        subirNUmero()
        ultimoOperador.current = Operadores.suma
    }

    const btnRestar = () => {
        subirNUmero()
        ultimoOperador.current = Operadores.resta
    } 

    const btnModulo = () => {
        const num1 = Number(number)

        setPreviusNumber(( num1 / 100) + '')
        setNumber(( num1 / 100) + '')
    }

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
                        onPress = {() => { navigation.replace('LoginScreen')}}
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
