import { StyleSheet } from "react-native";

export const textfieldStyles = StyleSheet.create ({

    textFields: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    box: {
        width: 130,
        height: 45,
        borderColor: '#D3D3D3',
        borderWidth: 4,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },

    text: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16
    },

    boxRow: {
        flexDirection: 'column',
    }

})