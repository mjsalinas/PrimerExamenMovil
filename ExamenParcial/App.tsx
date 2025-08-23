import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen.tsx";
import ProfileScreen from "./screens/ProfileScreen.tsx";
import SettingsScreen from "./screens/SettingsScreen.tsx";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: "Inicio" }} // Opcional: poner títulos en español
        />
        <Stack.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: "Perfil" }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{ title: "Configuración" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
