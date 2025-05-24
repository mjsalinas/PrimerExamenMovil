
import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  // Guardar los datos ingresados
  const [perfilGuardado, setPerfilGuardado] = useState<{ nombre: string; edad: string; bio: string } | null>(null);

  const guardarPerfil = () => {
    if (nombre && edad && bio) {
      setPerfilGuardado({ nombre, edad, bio });
      setNombre("");
      setEdad("");
      setBio("");
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

      {saved && perfilGuardado && (
        <View style={{ marginTop: 20 }}>
          <Text>¡Guardado!</Text>
          <Text>Tu nombre es: {perfilGuardado.nombre}, tienes {perfilGuardado.edad} años</Text>
          <Text>Biografía: {perfilGuardado.bio}</Text>
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;
