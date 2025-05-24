import React, { useState } from "react";
import { View, Text, Switch, StyleSheet} from "react-native";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false); 
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Modo Oscuro</Text>
      <Switch 
      value={darkMode} 
      onValueChange={(value) => {}} />

      <Text onPress={() => setShowAdvanced(!showAdvanced)}>Mostrar Avanzado</Text>

      {showAdvanced ? <Text>Configuraciones Avanzadas</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
  },
  
});

export default SettingsScreen;