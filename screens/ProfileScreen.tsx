
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre && edad && bio) {
      setSaved(true);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />
      <TextInput
        placeholder="Biografía"
        value={bio}
        onChangeText={setBio}
        multiline
        style={{ marginBottom: 10, borderWidth: 1, padding: 8 }}
      />

      <Button title="Guardar" onPress={guardarPerfil} />

      {saved && (
        <View style={{ marginTop: 20 }}>
          <Text>¡Guardado!</Text>
          <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
          <Text>Biografía: {bio}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
