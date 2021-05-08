import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    
    imagenLogin: {
        position: 'absolute',
        width: 120,
        height: 120,
        marginHorizontal: 91,
        marginTop: 39
    },
    loginContainerTop:{
        flex: 1,
        backgroundColor: '#1d6490',
    },  
    ImageCircle:{
        position: 'absolute',
        width: 106,
        height: 106,
        marginHorizontal: 135,  
        marginTop: 100
    },  
    ImageShare:{
        position: 'absolute',
        width: 50,
        height: 50,
        marginHorizontal: 162, 
        marginTop: 126
    },
    loginContainerBottom:{
        backgroundColor: 'white',
        justifyContent: 'flex-end',
        marginBottom: 255
    },
    loginContainer:{
        flex: 1,
        position: 'absolute',
        marginHorizontal: 23,
        marginTop: 239,
        height: 400,
        width: 330,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.53,
        shadowRadius: 13.97,
        backgroundColor: 'white',

        elevation: 21,
    },
    inputFieldUsername:{
        position: 'absolute',
        color: 'gray',
        fontSize: 18,
        borderColor: 'black',
        width: 220,
        height: 36,
        textAlign: 'center',
        marginHorizontal: 55,
        marginTop: 171
    },
    inputFieldPassword:{
        position: 'absolute',
        color: 'gray',
        fontSize: 18,
        borderColor: 'black',
        width: 220,
        height: 36,
        textAlign: 'center',
        marginHorizontal: 55,
        marginTop: 223
    },
    btnLogin:{
        position: 'absolute',
        alignItems: 'center',
        marginTop: 294,
        marginHorizontal: 55,
        width: 220,
        height: 36,
        backgroundColor: '#0f9431',
        color: 'white',
        fontSize: 20
    },
    btnLoginText:{
        alignItems: 'center',
        marginHorizontal: 78,
        color: 'white',
        fontSize: 20
    }
})