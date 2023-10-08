import { Text, View } from 'react-native';
import { screenContainersStyles } from '../styles/screenContainersStyles';
import { CustomButton } from '../components/customButton';

export const HomeScreen = () =>{
    return(
        <View style={screenContainersStyles.mainScreen}>
            <CustomButton text = "Street lyga" onPress = {() => {}}/>
            <CustomButton text= "Semi PRO lyga" onPress={() => {}}/>
        </View>
    );
};