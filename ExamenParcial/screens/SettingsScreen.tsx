import React, { useState } from "react";
import { View, Text, Switch ,Button} from "react-native";
import CustomButton from "../components/CustomButton";

const SettingsScreen = () => {
  const [darkMode, setDarkmode] = useState(false); 
  const [showAdvanced, setShowAdvanced] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      <Text>Modo Oscuro</Text>
      <Switch value={darkMode} onValueChange={() => {setDarkmode(!darkMode)}} />
<CustomButton title="Mostrar Avanzado" onPress={() => {setShowAdvanced(!showAdvanced)}} />
        

{showAdvanced ? <Text>Configuraciones Avanzadas</Text> : null}

    </View>
  );
};

export default SettingsScreen;