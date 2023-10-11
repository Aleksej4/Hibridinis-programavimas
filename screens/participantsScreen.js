import React from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';
import { screenContainersStyles } from '../styles/screenContainersStyles';
import { CustomButton } from '../components/customButton';
import { buttonStyles } from '../styles/buttonStyles';

const Driver = ({driver, navigation}) => {
    return(
    <TouchableHighlight style={buttonStyles.driverButtonStyle} onPress={() => {}}>
        <View>
        <Text>{driver.firstname}</Text>
        <Text>{driver.lastname}</Text>
        </View>
    </TouchableHighlight>
    );
}

export const ParticipantsScreen = ({ route, navigation }) => {
    const leagueData = route.params.jsonData;

    return (
        <View style={screenContainersStyles.mainScreen}>
            {leagueData.map(league => (
                <View key={league.league_id}>
                    <Text>{league.league_title} Drivers:</Text>
                    {league.drivers.map(driver => (
                        <View key={driver.driver_id}>
                            
                            <Driver driver={driver} navigation={navigation}/>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
};
