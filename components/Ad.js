import { adListContainerStyles } from "../styles/adListContainerStyles";
import { textStyles } from "../styles/textStyles";
import { useState } from "react";
import { Animated } from "react-native";
import {
    Text,
    View,
    TouchableHighlight,
    Image
} from "react-native";

export const Ad = ({car, onPress}) => {

    const [opacityValue] = useState(new Animated.Value(0));

    const fadeIn = () => {
      Animated.timing(opacityValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    };

    const imageFileName = car.photos[0];

    return(
        <TouchableHighlight underlayColor="#EEEEEE" style={adListContainerStyles.adFrameContainer} onPress={() => {onPress(); fadeIn()}}>
            <View>
                <Image source={{ uri: imageFileName}} style={adListContainerStyles.adPhotoContainer}/>
                <View style={adListContainerStyles.adDescriptionContainer}>
                    <View style={adListContainerStyles.adInfoContainer}>
                        <Text style={textStyles.adTextStyle2}>{car.make} {car.model}</Text>
                    </View>
                    <View style={{...adListContainerStyles.adInfoContainer, alignItems: 'flex-end'}}>
                        <Text style={textStyles.adTextStyle1}>{car.price}€</Text>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    )
}