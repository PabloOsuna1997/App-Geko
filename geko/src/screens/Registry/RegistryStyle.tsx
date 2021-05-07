import { StackScreenProps } from '@react-navigation/stack';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    top:{
        backgroundColor: '#e4e4e4',
        height: 127
    },
    gekoReg: {        
        marginTop: 44,
        marginBottom: 32,
        marginLeft: 22,
        width: 148,
        height: 44
    },
    caluclator: {      
        position: 'absolute',
        marginTop: 10,
        width: 35,
        height: 35
    },
    btnCalculator:{
        position: 'absolute',
        alignItems: 'center',
        marginTop: 154,
        marginLeft: 193,
        width: 155,
        height: 53,
        backgroundColor: '#060894',
        color: 'white',
        fontSize: 20
    },
    btnCalculatorText:{
        position: 'absolute',
        alignItems: 'center',
        color: 'white',
        marginTop: 15,
        fontSize: 15
    },
    txt:{
        position: 'absolute',
        marginTop: 162,
        marginLeft: 28,
        width: 197,
        height: 39,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 25,
        lineHeight: 41,
        color: '#000698'
    },

    container:{
        position: 'absolute',
        marginTop: 229
    }
})