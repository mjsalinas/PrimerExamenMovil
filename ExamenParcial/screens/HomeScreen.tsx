import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

const HomeScreen = ({ navigation }: any) => {
  const showWelcome = true;

  return (
    <View style={styles.container}>
      {showWelcome && <Text>Bienvenido a la App</Text>}

      <CustomButton
        title="Ir a Perfil"
        onPress={() => {
          navigation.navigate("Perfil");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;