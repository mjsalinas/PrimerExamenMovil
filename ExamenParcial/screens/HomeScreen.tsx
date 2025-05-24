import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";


export default function HomeScreen ({ navigation }:{navigation: any}) {
  const [showWelcome, setShowWelcome]= useState(true);

  return (
    <View style={styles.container}>
      {showWelcome && <Text> Bienvenido a la App </Text>}

      <CustomButton
        titulo="Ir a Perfil"
        onPress={() => {
        navigation.navigate("Perfil");}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
});

