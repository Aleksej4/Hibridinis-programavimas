import { profileStyles } from "../styles/profileStyles";
import { textStyles } from "../styles/textStyles";
import { containerStyles } from "../styles/containerStyles";
import { CustomButton } from "../components/customButton";
import { DataContext } from "../adsData/DataContext";
import { Ad } from "../components/Ad";
import {
    View,
    Text,
    Image,
    ScrollView
} from "react-native"
import { useContext } from "react";

export const ProfileScreen = ({navigation}) => {
    const {data} = useContext(DataContext)
    const {fullName} = useContext(DataContext)

    return(
        <View style={containerStyles.mainContainer}>
            <View style={profileStyles.infoContainer}>
                <Image source={require('../assets/profile.jpg')} style={{borderRadius: 100, width: 120, height: 120}}/>
                <Text style={{...textStyles.adTextStyle1, marginTop: 20}}>{fullName}</Text>
            </View>
            <View style={profileStyles.buttonsContainer}>
                <CustomButton onPress={() => {navigation.navigate('CreateAd')}} text="Create ad"/>
            </View>
            <ScrollView style={profileStyles.myAdsContainer}>
                <View style={{ alignItems: 'center' }}>
                    {(data?.cars || [])
                    .filter((car) => car.seller.name === fullName)
                    .map((car) => (
                        <View key={car.id}>
                            <Ad car={car} onPress={() => navigation.navigate('AdScreen', { car: car })} />
                        </View>
                        ))}
                    {((data?.cars || [])
                    .filter((car) => car.seller.name === fullName).length === 0) && (
                        <Text>You do not have any ads. Maybe create one?</Text>
                        )}
                </View>
            </ScrollView>
        </View>
    );
}