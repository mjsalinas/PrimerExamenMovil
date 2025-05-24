import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? "#121212" : "#fff" }]}>
      <Text style={[styles.label, { color: darkMode ? "#fff" : "#000" }]}>Modo Oscuro</Text>
      <Switch value={darkMode} onValueChange={setDarkMode} />

      <Text
        style={[styles.toggle, { color: darkMode ? "#4DA6FF" : "#007AFF" }]}
        onPress={() => setShowAdvanced(!showAdvanced)}
      >
        Mostrar Avanzado
      </Text>

      {showAdvanced && (
        <Text style={{ color: darkMode ? "#ccc" : "#333", marginTop: 10 }}>
          Configuraciones Avanzadas
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  label: {
    fontSize: 18,
    marginBottom: 10
  },
  toggle: {
    marginTop: 20,
    fontWeight: "bold"
  }
});

export default SettingsScreen;
