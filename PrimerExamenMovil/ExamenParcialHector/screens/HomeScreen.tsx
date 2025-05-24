import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";
import { useTheme } from "../context/ThemeContext";

interface HomeScreenProps {
  navigation: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { isDarkMode } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#02c2ff" },
      ]}
    >
      <Text style={[styles.welcomeText, { color: isDarkMode ? "#fff" : "#333" }]}>
        Bienvenido a la Base de Datos
      </Text>

      <CustomButton
        title="Ir a Perfil"
        onPress={() => navigation.navigate("Profile")}
      />

<CustomButton
        title="Ir a Configuración"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 40,
  },
});

export default HomeScreen;