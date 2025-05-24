import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import CustomButton from "../components/CustomButton";

const ProfileScreen = () => {
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState(""); 
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre && edad) {
      setSaved(true);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Nombre" value={nombre} onChangeText={setNombre} />
      <TextInput placeholder="Edad" value={edad} onChangeText={setEdad} />
      <TextInput placeholder="Biografía" value={bio} onChangeText={setBio} />

      <CustomButton label="Guardar" onPress={guardarPerfil} />
      
      {saved ? <Text>Guardado!</Text> : ""}
      {saved && <View> 
        <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
        </View>}
    </View>
  );
};

export default ProfileScreen;