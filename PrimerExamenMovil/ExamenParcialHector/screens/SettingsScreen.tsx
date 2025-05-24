import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { useTheme } from "../context/ThemeContext";

const SettingsScreen: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [showAdvanced, setShowAdvanced] = useState(false); 

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#f9f9f9" },
      ]}
    >
      <View style={styles.settingRow}>
        <Text style={[styles.label, { color: isDarkMode ? "#fff" : "#333" }]}>
          Modo Oscuro
        </Text>
        <Switch
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          thumbColor={isDarkMode ? "#007acc" : "#ccc"}
          trackColor={{ false: "#767578", true: "#81b0ff" }}
        />
      </View>

      <Text
        style={[
          styles.advancedToggle,
          { color: isDarkMode ? "#4db8ff" : "#007acc" },
        ]}
        onPress={() => setShowAdvanced(!showAdvanced)}
      >
        {showAdvanced ? "Ocultar Opciones" : "Mostrar Opciones"}
      </Text>

      {showAdvanced && (
        <Text style={[styles.advancedText, { color: isDarkMode ? "#ddd" : "#555" }]}>
          Configuracion Predeterminada
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
  },
  advancedToggle: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    textDecorationLine: "underline",
  },
  advancedText: {
    fontSize: 14,
    marginTop: 10,
  },
});

export default SettingsScreen;