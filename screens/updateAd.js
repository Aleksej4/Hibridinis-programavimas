import { containerStyles } from "../styles/containerStyles";
import { createAdStyles } from "../styles/createAdStyles";
import { textStyles } from "../styles/textStyles";
import { CustomButton } from "../components/customButton";
import { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../adsData/DataContext";

import {
    View,
    Text,
    TextInput,
    ScrollView
} from "react-native";

export const UpdateAd = ({route, navigation}) => {
    const { adId } = route.params
    const { contact } = useContext(DataContext)
    const { fullName } = useContext(DataContext)
    const { data } = useContext(DataContext)

    const existingAd = adId ? data.cars.find((ad) => ad.id === adId) : null;

    const [price, setPrice] = useState(existingAd.price);
    const [carYear, setCarYear] = useState(existingAd.year);
    const [make, setMake] = useState(existingAd.make);
    const [model, setModel] = useState(existingAd.model);
    const [mileage, setMileage] = useState(existingAd.mileage);
    const [engineType, setEngineType] = useState(existingAd.engine.type);
    const [displacement, setDisplacement] = useState(existingAd.engine.displacement);
    const [power, setPower] = useState(existingAd.engine.powerKw);
    const [description, setDescription] = useState(existingAd.description);

    const dataContext = useContext(DataContext);

    const handleCreateAd = () => {
        const updateAD = {
            id: adId,
            year: carYear || "N/A",
            make: make || "N/A",
            model: model || "N/A",
            mileage: mileage || "0",
            description: description || "N/A",
            seller: {
              name: fullName,
              contact: contact,
            },
            price: price || "0",
            engine: {
              type: engineType || "N/A",
              displacement: displacement || "0",
              powerKw: power || "0",
            },
            photos: [
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtltRLddVEb1ZFjyHk3r6vgn92p8kud0PuPg&usqp=CAU"
            ],
        }

        
        dataContext.editAd(updateAD);
        navigation.goBack()
        navigation.goBack()
    }

    return (
        <ScrollView>
            <View style={containerStyles.mainContainer}>
                <View style={createAdStyles.titleStyle}>
                    <Text style={{...textStyles.adTextStyle2, fontWeight: 'bold'}}>Provide information about your car below</Text>
                </View>

                <View style={createAdStyles.categoryNameStyle}>
                    <Text style={textStyles.adTextStyle2}>Basic car details</Text>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Price:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Provide car price"} keyboardType="numeric" value={price} onChangeText={(text) => setPrice(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Car year:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter year"} keyboardType="numeric" value={carYear} onChangeText={(text) => setCarYear(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Make:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter make"} value={make} onChangeText={(text) => setMake(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Model:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter model"} value={model} onChangeText={(text) => setModel(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Mileage:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter mileage"} keyboardType="numeric" value={mileage} onChangeText={(text) => setMileage(text)}/>
                </View>

                <View style={{...createAdStyles.categoryNameStyle, marginTop: 20}}>
                    <Text style={textStyles.adTextStyle2}>Engine details</Text>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Type:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter engine type"} value={engineType} onChangeText={(text) => setEngineType(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Displacemen:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter displacement"} value={displacement} onChangeText={(text) => setDisplacement(text)}/>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <Text style={textStyles.adTextStyle2}>Power:  </Text>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Enter power in kw"} keyboardType="numeric" value={power} onChangeText={(text) => setPower(text)}/>
                </View>

                <View style={{...createAdStyles.categoryNameStyle, marginTop: 20}}>
                    <Text style={textStyles.adTextStyle2}>Description</Text>
                </View>
                <View style={createAdStyles.textInputStyle}>
                    <TextInput style={{height: 50, fontSize: 16}} placeholder={"Start write here"} value={description} onChangeText={(text) => setDescription(text)}/>
                </View>

                <View style={{...createAdStyles.buttonContainerStyle, marginTop: 40}}> 
                    <View style={{marginEnd: 50}}>
                        <CustomButton onPress={handleCreateAd} text="Update ad"/>
                    </View>
                    <View style={{marginStart: 50}}>
                        <CustomButton onPress={() => {navigation.goBack()}} text="Cancel"/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}