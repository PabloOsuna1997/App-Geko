import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    imagenLogo: {
        marginTop: 350,
        marginLeft: 200,
        width: 150,
        height: 150,
    },
    tittle: {
        position: 'absolute',
        marginTop: 460,
        marginLeft: 240,
        width: 150,
        height: 150,
        fontSize: 15,
        color: '#1d6490',
        fontWeight: "500"
    },
    botonReturn: {
        position: 'absolute',
        marginTop: 380,
        marginLeft: 100,
        width: 150,
        height: 150,
    },
    firstContainer:{
        flex: 0,
        marginTop: -360,
        marginLeft: -95,
        backgroundColor: 'white', 
        height: 550,
        width: 550,
        borderRadius:300    
    },
    calculatorContainer: {
        flex: 1,
        backgroundColor: '#1d6490',
        justifyContent: 'flex-end'
    },
    resultado:{
        color: 'white',
        fontSize: 50,
        textAlign: 'center'
    },
    resultLittle: {        
        color: 'rgba(255,255,255,0.5)',
        fontSize: 50,
        textAlign: 'center'
    },

    btnsContainer:{
        flex: 1,
        backgroundColor: 'white',
    },
    btnsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 7,
        paddingHorizontal: 10

    },


})