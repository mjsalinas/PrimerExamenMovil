import React from "react";
import { View, Text, Button } from "react-native";

const HomeScreen = ({ navigation }: any) => {
  const showWelcome = true;  // Cambié a true para que se muestre el mensaje de bienvenida

  return (
    <View style={{ padding: 20 }}>
      {showWelcome && <Text>Bienvenido a la App</Text>}

      <Button
        title="Ir a Perfil"
        onPress={() => {
          navigation.navigate("Profile");  // Navega a la pantalla Perfil
        }}
      />

      <Button
        title="Ir a Configuración"
        onPress={() => {
          navigation.navigate("Settings");  // Navega a la pantalla Configuración
        }}
        Style={{ marginTop: 10 }}
      />
    </View>
  );
};

export default HomeScreen;
