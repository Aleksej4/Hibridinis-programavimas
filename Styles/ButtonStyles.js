import { StyleSheet } from "react-native";

export const buttonStyles = StyleSheet.create({

    buttons: {
        flexDirection: 'column',
        marginTop: 60,
      },

    buttonRow: {
        flexDirection: 'row',
      },
    
    buttonStyle: {
        width: 135,
        height: 50, 
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25,
        marginVertical: 20,
        borderColor: '#E5E500',
        borderWidth: 3,
      },

    buttonText: {
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 16
      },

    buttonPressColor:{
        backgroundColor: '#D3D3D3',
      },
});