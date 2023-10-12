import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { containersStyles } from '../styles/containerStyles';
import { customButtonStyle } from '../styles/customButtonStyle';
import { textStyles } from '../styles/textStyles';

export const Driver = ({ driver, navigation, getDriverPoints }) => {
    return (
        <TouchableHighlight underlayColor="#EEEEEE" style={customButtonStyle.driverButtonStyle} onPress={() => {navigation.navigate('DriverFullDataScreen', {driverData: driver})}}>
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