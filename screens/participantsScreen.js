import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { containersStyles } from '../styles/containerStyles';
import { Driver } from '../components/driverButton';
import { textStyles } from '../styles/textStyles';
import { SortButton } from '../components/sortButton';

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

    const setSort = (league) => {
        if(sortByName){
            sortDriversByPoints(league);
        }else{
            sortDriversByName(league)
        }
    }

    const [sortByName, setSortState] = useState(false)

    return (
        <ScrollView>
            <View style={containersStyles.mainContainer}>
                {leagueData.map((league) => {
                    setSort(league)
                    return (
                        <View style={containersStyles.participantListContainer} key={league.league_id}>
                            <View style={containersStyles.rowContainer}>
                                <Text style={textStyles.buttonText}>Sort by: </Text>
                                <SortButton text="Points" onPress={() => setSortState(true)} color={sortByName ? '#ADD8E6' : '#FFFFFF'}/>
                                <SortButton text="Full name" onPress={() => setSortState(false)} color={!sortByName ? '#ADD8E6' : '#FFFFFF'}/>
                            </View>
                            {league.drivers.map((driver) => (
                                <View key={driver.driver_id}>
                                    <Driver driver={driver} navigation={navigation} getDriverPoints={getDriverPoints} />
                                </View>
                            ))}
                        </View>
                    );
                })}
            </View>
        </ScrollView>
    );

};
