import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { containersStyles } from '../styles/containerStyles';
import { textStyles } from '../styles/textStyles';

const RaceInfo = ({ race }) => {
    return (
        <View style={containersStyles.raceInfoContainer}>
            <Text style={[textStyles.buttonText, { marginLeft: 10 }]}>Race Information: {race.race_information}</Text>
            <Text style={[textStyles.buttonText, { marginLeft: 10 }]}>Qualification Position: {race.qualification_position}</Text>
            <Text style={[textStyles.buttonText, { marginLeft: 10 }]}>Qualification Result: {race.qualification_result}</Text>
            <Text style={[textStyles.buttonText, { marginLeft: 10 }]}>Qualification Points: {race.qualification_points}</Text>
            <Text style={[textStyles.buttonText, { marginLeft: 10 }]}>Tandem Result: {race.tandem_result}</Text>
            <Text style={[textStyles.buttonText, { marginLeft: 10 }]}>Tandem Points: {race.tandem_points}</Text>
        </View>
    );
};

export const DriverFullDataScreen = ({ route }) => {
    const { driverData } = route.params;

    return (
        <ScrollView>
            <View style={containersStyles.driverDataMainContainer}>
                <View style={[containersStyles.rowContainer, { margin: 10 }]}>
                    <Text style={textStyles.titleText}>{driverData.firstname} </Text>
                    <Text style={textStyles.titleText}>{driverData.lastname}</Text>
                </View>
                <View style={containersStyles.columnContainer}>
                    <Text style={textStyles.buttonText}>Car: {driverData.car} </Text>
                </View>
                {driverData.race.map((race, index) => (
                    <RaceInfo key={`${race.race_id}_${index}`} race={race} />
                ))}
            </View>
        </ScrollView>
    );
};
