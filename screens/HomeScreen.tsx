import React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = ({ navigation }: any) => {
  const showWelcome = true; // Condición para mostrar el mensaje

  return (
    <View style={{ padding: 20 }}>
      {showWelcome && (
        <Text style={{ fontSize: 18, marginBottom: 10 }}>
          Bienvenido a la App
        </Text>
      )}

      <CustomButton
        label="Ir a Perfil"
        onPress={() => navigation.navigate("Profile")}
      />

      <CustomButton
        label="Ir a Configuración"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export default HomeScreen;

