import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "../ProfileScreen";
import HomeScreen from "../screens/HomeScreen";
// ⚠️ Error: SettingsScreen no importado
const Stack = createNativeStackNavigator();
//HOLA
export const RootNavigator = () => {
  return (
    <NavigationContainer>

    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
    </NavigationContainer>

  );
};