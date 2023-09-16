import { StatusBar } from 'expo-status-bar';
import { containerStyles } from './Styles/ContainerStyles';
import { buttonStyles } from './Styles/ButtonStyles';
import { textfieldStyles } from './Styles/TextfieldStyles';
import { 
  Text, 
  View,
  TouchableHighlight, 
} from 'react-native';

const Button = ({onPress, text}) => (
  <TouchableHighlight style={buttonStyles.buttonStyle} onPress={onPress}>
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


export default function App() {
  const buttons = [
    { text: 'Button1', onPress: () => {} },
    { text: 'Button2', onPress: () => {} },
    { text: 'Button3', onPress: () => {} },
    { text: 'Button4', onPress: () => {} },
  ];

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

        <View style={textfieldStyles.box}>
        <Text style={textfieldStyles.text}>Text1</Text>
        </View>

      </View>
    </View>
  );
}
