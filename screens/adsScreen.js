import { Ad } from "../components/Ad";
import { containerStyles } from "../styles/containerStyles";
import {
    View,
    ScrollView
} from "react-native";
import { DataContext } from "../adsData/DataContext";
import { useContext } from "react";

export const AdsScreen = ({navigation}) => {
    const {data} = useContext(DataContext);
    return (
        <ScrollView>
          <View style={containerStyles.mainContainer}>
            {data && data.cars && data.cars.map((car) => (
              <View key={car.id}>
                <Ad car={car} onPress={() => {navigation.navigate('AdScreen', {car: car})}}/>
              </View>
            ))}
          </View>
        </ScrollView>
      )
      
}