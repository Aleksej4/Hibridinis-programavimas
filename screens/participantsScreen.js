import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { containersStyles } from '../styles/containerStyles';
import { customButtonStyle } from '../styles/customButtonStyle';
import { textStyles } from '../styles/textStyles';

const Driver = ({ driver, navigation, getDriverPoints }) => {
    return (
        <TouchableHighlight underlayColor="#EEEEEE" style={customButtonStyle.driverButtonStyle} onPress={() => {}}>
            <View style={containersStyles.driverButtonContainer}>
                <View style={containersStyles.driverDataContainer}>
                    <Text style={textStyles.buttonText}>{driver.firstname}</Text>
                    <Text style={textStyles.buttonText}>{driver.lastname}</Text>
                </View>

                <View style={containersStyles.driverDataContainer}>
                    <Text style={textStyles.buttonText}>{driver.car}</Text>
                    <Text></Text>
                    <Text style={textStyles.buttonText}>Score: {getDriverPoints(driver)}</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
}

export const ParticipantsScreen = ({ route, navigation }) => {
    const leagueData = route.params.jsonData;

    const getDriverPoints = (driver) => {
        let points = 0;
        driver.race.forEach((race) => {
            points += race.qualification_points + race.tandem_points;
        });
        return points;
    }

    const sortDriversByPoints = (league) => {
        if (league.drivers) {
            league.drivers.sort((driverA, driverB) => {
                return getDriverPoints(driverB) - getDriverPoints(driverA);
            });
        }
    }

    const sortDriversByName = (league) => {
        if(league.drivers){
            league.drivers.sort((driverA, driverB) => {
                const nameA = driverA.firstname + ' ' + driverA.lastname
                const nameB = driverB.firstname + ' ' + driverB.lastname
                return nameA.localeCompare(nameB);
            })
        }
    }

    return (
        <View style={containersStyles.mainContainer}>
            {leagueData.map((league) => {
                sortDriversByPoints(league);
                return (
                    <View style={containersStyles.participantListContainer} key={league.league_id}>
                        {league.drivers.map((driver) => (
                            <View key={driver.driver_id}>
                                <Driver driver={driver} navigation={navigation} getDriverPoints={getDriverPoints} />
                            </View>
                        ))}
                    </View>
                );
            })}
        </View>
    );
};
