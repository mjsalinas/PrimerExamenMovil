import React, { useState } from "react";
import { View, Text, Switch } from "react-native";

const SettingsScreen = () => {
  const [darkMode, setDarkMode] = useState(false);  // Ahora se puede cambiar el modo oscuro
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text>Modo Oscuro</Text>
      <Switch 
        value={darkMode} 
        onValueChange={setDarkMode}  // Actualiza el estado cuando se cambia el switch
      />

      <Text onPress={() => setShowAdvanced(!showAdvanced)} style={{ marginTop: 20 }}>
        Mostrar Avanzado
      </Text>

      {showAdvanced ? <Text>Configuraciones Avanzadas</Text> : null}
    </View>
  );
};

export default SettingsScreen;
