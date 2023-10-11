import React from 'react';
import { View } from 'react-native';
import { screenContainersStyles } from '../styles/screenContainersStyles';
import { CustomButton } from '../components/customButton';
const JsonData = require('../dataFile/data.json')

export const HomeScreen = ({navigation}) =>{
    const semiLeague = 
    const streetLeague = 
    return(
    <View style={screenContainersStyles.mainScreen}>
        <CustomButton text = "Street lyga" onPress = {() => {navigation.navigate('ParticipantsScreen', {jsonData : JsonData})}}
        />
        <CustomButton text= "Semi PRO lyga" onPress={() => {navigation.navigate('ParticipantsScreen', {jsonData : JsonData})}}/>
    </View>
    );
};