import React from 'react';
import { customButtonStyle } from '../styles/customButtonStyle';
import { Text, TouchableHighlight} from 'react-native';
import { textStyles } from '../styles/textStyles';

export const CustomButton = ({ text, onPress}) => (
    <TouchableHighlight underlayColor="#EEEEEE" style={customButtonStyle.mainButton} onPress={onPress}>
        <Text style={textStyles.buttonText}>{text}</Text>
    </TouchableHighlight>
);