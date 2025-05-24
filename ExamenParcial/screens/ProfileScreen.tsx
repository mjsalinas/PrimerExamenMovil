import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";

const ProfileScreen = () => {
  
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState(""); 
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
  
    if (nombre !== "" && edad !== "") {
      setSaved(true);
     
      console.log("Perfil guardado:", { nombre, edad, bio });
    } else {
      setSaved(false); 
    }
  };

  return (
    <View style={{ padding: 20 }}>
      {}
      <TextInput
        placeholder="Nombre"
        value={nombre}         
        onChangeText={setNombre} 
      />
      <TextInput
        placeholder="Edad"
        value={edad}           
        onChangeText={setEdad}   
        keyboardType="numeric" 
      />
      <TextInput
        placeholder="Biografía"
        value={bio}          
        onChangeText={setBio}   
      />

      {}
      <Button title="Guardar" onPress={guardarPerfil} />

      {}
      {saved ? <Text>Guardado!</Text> : null}

      {}
      {saved && (
        <View>
          <Text>Tu nombre es: {nombre}, tienes {edad} años</Text>
          {}
          {bio !== "" && <Text>Biografía: {bio}</Text>}
        </View>
      )}
    </View>
  );
};

export default ProfileScreen;