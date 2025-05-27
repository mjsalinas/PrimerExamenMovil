import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [biografia, setBiografia] = useState("");
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre && edad) {
      setSaved(true);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} style={{ marginBottom: 10 }} />
      <TextInput placeholder="Edad" value={edad} onChangeText={setEdad} keyboardType="numeric" style={{ marginBottom: 10 }} />
      <TextInput placeholder="Biografía" value={biografia} onChangeText={setBiografia} style={{ marginBottom: 10 }} />

      <Button title="Guardar" onPress={guardarPerfil} />

      {saved && (
        <View style={{ marginTop: 10 }}>
          <Text>Guardado!</Text>
          <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
          <Text>Biografia: {biografia}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;










