import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './screens/homeScreen';
import { ParticipantsScreen } from './screens/participantsScreen';
import { textStyles } from './styles/textStyles';

const Stack = createNativeStackNavigator();

function getHeaderTitle(route) {
  const leagueTitle = route.params ? route.params.leagueTitle : "Default Title"; // Set a default title if needed
  return `${leagueTitle} Drivers`;
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ title: "Leagues", headerTitleStyle: textStyles.titleText}}/>
        <Stack.Screen
        name="ParticipantsScreen"
        component={ParticipantsScreen}
        options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
          headerTitleStyle: textStyles.titleText
        })}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
