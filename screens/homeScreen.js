import React from 'react';
import { View } from 'react-native';
import { containersStyles } from '../styles/containerStyles';
import { CustomButton } from '../components/customButton';
import { SortButton } from '../components/sortButton';
const JsonData = require('../dataFile/data.json')

export const HomeScreen = ({navigation}) =>{
    const semiLeague = JsonData.filter(item => item.league_title === "SEMI PRO")
    const streetLeague = JsonData.filter(item => item.league_title === "STREET")
    return(
    <View style={containersStyles.mainContainer}>
        <CustomButton text = "Street lyga" onPress = {() => {navigation.navigate('ParticipantsScreen', {leagueTitle: "STREET", jsonData : streetLeague})}}/>
        <CustomButton text= "Semi PRO lyga" onPress={() => {navigation.navigate('ParticipantsScreen', {leagueTitle: "SEMI PRO", jsonData : semiLeague})}}/>
    </View>
    );
};