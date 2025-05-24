import React from "react";
import { View, Text, Button } from "react-native";
import CustomButton from "../components/CustomButton";


export default function HomeScreen ({ navigation }: any) => {
  const showWelcome = false;

  return (
    <View style={{ padding: 20 }}>
      {showWelcome && <Text>Bienvenido a la App</Text>}

      <CustomButtonButton
        title="Ir a Perfil"
        onPress={() => {
        navigation.navigate("Perfil");
        }}
      />
    </View>
  );
};
