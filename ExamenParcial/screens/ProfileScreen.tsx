import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState<string>("");
  const [edad, setEdad] = useState <string>("");
  const [bio, setBio] = useState<string>(""); 
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre && edad) {
      setSaved(true);
    }
  };

  return (
    <View style={styles.container}>

    <TextInput 
      style={styles.input}
      placeholder="Nombre" 
      value={nombre}
      onChangeText={setNombre}
    />
    <TextInput 
      style={styles.input}
      placeholder="Edad" 
      value={edad}
      keyboardType="numeric"
      onChangeText={setEdad}
    />
    <TextInput 
       style={styles.input}
        placeholder="Biografía"
        value={bio}
        onChangeText={setBio}
    />

      <Button title="Guardar" onPress={() => {}} />
      {saved ? <Text>Guardado!</Text> : ""}
      {saved && <View> 
        <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
        </View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#1E1E2C",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default ProfileScreen;