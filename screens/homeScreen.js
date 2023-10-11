import React from 'react';
import { View } from 'react-native';
import { screenContainersStyles } from '../styles/screenContainersStyles';
import { CustomButton } from '../components/customButton';
const JsonData = require('../dataFile/data.json')

export const HomeScreen = ({navigation}) =>{
    const semiLeague = JsonData.filter(item => item.league_title === "SEMI PRO")
    const streetLeague = JsonData.filter(item => item.league_title === "STREET")
    return(
    <View style={screenContainersStyles.mainScreen}>
        <CustomButton text = "Street lyga" onPress = {() => {navigation.navigate('ParticipantsScreen', {jsonData : streetLeague})}}
        />
        <CustomButton text= "Semi PRO lyga" onPress={() => {navigation.navigate('ParticipantsScreen', {jsonData : semiLeague})}}/>
    </View>
    );
};