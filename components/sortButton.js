import React from 'react';
import { TouchableOpacity, View} from 'react-native';
import { customButtonStyle } from '../styles/customButtonStyle';

export const SortButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={customButtonStyle.sortButtonStyle} />
    </TouchableOpacity>
  );
};
