import React from 'react';
import { TouchableOpacity, View, Text} from 'react-native';
import { customButtonStyle } from '../styles/customButtonStyle';
import { containersStyles } from '../styles/containerStyles';
import { textStyles } from '../styles/textStyles';

export const SortButton = ({ onPress, text, color}) => {
  return (
    <View style={containersStyles.rowContainer}>
        <TouchableOpacity onPress={onPress}>
            <View style={[customButtonStyle.sortButtonStyle, {backgroundColor: color}]} />
        </TouchableOpacity>
        <Text style={textStyles.buttonText}>{text}</Text>
    </View>
  );
};
