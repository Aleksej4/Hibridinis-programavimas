import { StyleSheet } from "react-native";

export const customButtonStyle = StyleSheet.create({
    mainButton: {
        width: 170,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: '#000000',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        margin: 10,
    },

    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16
    }
})