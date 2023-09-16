import { StatusBar } from 'expo-status-bar';
import { containerStyles } from './Styles/ContainerStyles';
import { buttonStyles } from './Styles/ButtonStyles';
import { textfieldStyles } from './Styles/TextfieldStyles';
import React, { useState } from 'react';
import { 
  Text, 
  View,
  TouchableHighlight, 
} from 'react-native';

const Button = ({onPress, text}) => (
  <TouchableHighlight underlayColor='#EEEEEE' style={buttonStyles.buttonStyle} onPress={onPress}>
    <Text style={buttonStyles.buttonText}>{text}</Text>
  </TouchableHighlight>
);

const ButtonRow = ({buttons}) => (
  <View style={buttonStyles.buttonRow}>
    {buttons.map((button, index) => (
    <Button key={index} {...button} />
    ))}
  </View>
);

const TextBox = ({text, color}) => (
  <View style={textfieldStyles.box}>
    <Text style={[textfieldStyles.text, {color}]}>{text}</Text>
  </View>
);

const TextBoxRow = ({textBoxes}) => (
  <View style={textfieldStyles.boxRow}>
    {textBoxes.map((textBox, index) => (
    <TextBox key={index} {...textBox} />
    ))}
 </View>
);

export default function App() {
  
  const [textColors, setTextColor] = useState({
    text1: '#000000',
    text2: '#000000',
    text3: '#000000',
    text4: '#000000',
  });

  const setColor = (text) => {
    if (textColors[text] === '#000000'){
      setTextColor({ ...textColors, [text]: '#FFFFFF' });
    }else{
      setTextColor({ ...textColors, [text]: '#000000' });
    }
  };

  const buttons = [
    {onPress: () => setColor('text1'), text: 'Button1' },
    {onPress: () => setColor('text2'), text: 'Button2' },
    {onPress: () => setColor('text3'), text: 'Button3' },
    {onPress: () => setColor('text4'), text: 'Button4' },
  ]

  const textBoxes = [
    {text: "Text1", color: textColors.text1},
    {text: "Text2", color: textColors.text2},
    {text: "Text3", color: textColors.text3},
    {text: "Text4", color: textColors.text4},
  ]

  return (
    <View style={containerStyles.container}>
      <View style={containerStyles.gray}>
        <View style={buttonStyles.buttons}>
          {/* Row 1*/}
          <ButtonRow buttons={buttons.slice(0, 2)} />
          {/* Row 2*/}
          <ButtonRow buttons={buttons.slice(2, 4)} />
        </View>
      </View>
      <View style={containerStyles.pink}>
        <TextBoxRow textBoxes={textBoxes} /> 
      </View>
    </View>
  );
}
