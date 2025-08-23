import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre.trim() !== "" && edad.trim() !== "") {
      setSaved(true);
    } else {
      setSaved(false);
      alert("Por favor, complete los campos Nombre y Edad");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={setNombre}
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Edad"
        value={edad}
        onChangeText={setEdad}
        keyboardType="numeric"
        style={{ borderBottomWidth: 1, marginBottom: 10 }}
      />
      <TextInput
        placeholder="Biografía"
        value={bio}
        onChangeText={setBio}
        multiline
        numberOfLines={4}
        style={{ borderWidth: 1, marginBottom: 10, padding: 5 }}
      />

      <Button title="Guardar" onPress={guardarPerfil} />

      {saved && (
        <>
          <Text style={{ marginTop: 10, color: "green" }}>Guardado!</Text>
          <View style={{ marginTop: 10 }}>
            <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
            {bio ? <Text>Biografía: {bio}</Text> : null}
          </View>
        </>
      )}
    </View>
  );
};

export default ProfileScreen;
