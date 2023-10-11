import { Text, View } from 'react-native';
import { screenContainersStyles } from '../styles/screenContainersStyles';
import { CustomButton } from '../components/customButton';

export const ParticipantsScreen = ({route}) =>{
    const leagueData = route.params.jsonData
    
    return(
        <View style={screenContainersStyles.mainScreen}>
            
        </View>
    );
};