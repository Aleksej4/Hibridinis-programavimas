import { StyleSheet } from "react-native";

export const containersStyles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    mainButtonsContainer: {
      flexDirection: "column",
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10
    },

    participantListContainer: {
      flex: 1,
      flexDirection: "column",
      alignItems: 'center',
      marginTop: 10,
    },

    driverButtonContainer: {
      width: 350,
      height: 150,
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row'
    },

    driverDataContainer: {
      width: 150,
      height: 120,
      margin: 5,
      alignItems: 'left',
      justifyContent: 'center',
      flexDirection: 'column',
    },

    rowContainer: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'row'
    },

    columnContainer: {
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column'
    },

    driverDataMainContainer: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFFFFF'
    },

    raceInfoContainer: {
      width: 350,
      height: 200,
      margin: 5,
      borderRadius: 15,
      borderWidth: 3,
      borderColor: "#000000",
      alignItems: 'flex-start',
      justifyContent: 'center',
    }
  });