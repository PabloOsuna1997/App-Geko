import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    item: {
        marginTop: 20,
        flexDirection: "row",
        width: 321,
        height: 62,
        marginLeft: 28,
        borderWidth: 1,
    },
    number: {
        width: 60,
        height: 60,
        backgroundColor: '#0aa428'
    },
    numberTxt:{
        width: 45,
        height: 38,
        marginLeft: 6,
        marginTop: 5,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 35,
        lineHeight: 41,
        textAlign: 'center',
        color: '#FFFFFF'

    },
    txt: {
        position: 'absolute',
        width: 219,
        height: 25,
        marginLeft: 82,
        marginTop: 20,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        color: '#A7A7A7'
    }
})