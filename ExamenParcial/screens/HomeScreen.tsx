import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }: any) {
  //const [showWelcome, setshowWelcome] = useState(false);

  const showWelcome = true;

  return (
    <View style={{ padding: 20 }}>
      {showWelcome && <Text>Bienvenido a la App</Text>}

      <Button
        title="Ir a Perfil"
        onPress={() => {
          navigation.navigate("Profile");
        }}
      />
  <View style={{ padding: 10 }}>
        <Button
          title="Ir a Settings"
          onPress={() => {
            navigation.navigate("Settings");
          }}
        />
        </View>
    </View>
  );
}

