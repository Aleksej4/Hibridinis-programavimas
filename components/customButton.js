import { Text, TouchableHighlight} from 'react-native';
import React from 'react';
import { customButtonStyle } from '../styles/customButtonStyle';

export const CustomButton = ({ text, onPress}) => (
    <TouchableHighlight underlayColor="#888888" style={customButtonStyle.mainButton} onPress={onPress}>
        <Text style={customButtonStyle.buttonText}>{text}</Text>
    </TouchableHighlight>
);