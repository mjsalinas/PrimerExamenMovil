import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { useTheme} from "../context/ThemeContext";

const ProfileScreen: React.FC = () => {
  const { isDarkMode } = useTheme(); 
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [bio, setBio] = useState("");
  const [saved, setSaved] = useState(false);

  const guardarPerfil = () => {
    if (nombre && edad && bio !== "") {
      setSaved(true);
    } else {
      alert("Por favor, ingresa un nombre y una edad .");
    }
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>, value: string) => {
    setter(value);
    setSaved(false);
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? "#333" : "#02c2ff" },
      ]}
    >
      <TextInput
        placeholder="Nombre"
        value={nombre}
        onChangeText={(value) => handleInputChange(setNombre, value)}
        style={[
          styles.input,
          { backgroundColor: isDarkMode ? "#555" : "#fff", color: isDarkMode ? "#fff" : "#333" },
        ]}
      />

      <TextInput
        placeholder="Edad"
        value={edad}
        onChangeText={(value) => handleInputChange(setEdad, value)}
        keyboardType="numeric"
        style={[
          styles.input,
          { backgroundColor: isDarkMode ? "#555" : "#fff", color: isDarkMode ? "#fff" : "#333" },
        ]}
      />

      <TextInput
        placeholder="Biografia"
        value={bio}
        onChangeText={(value) => handleInputChange(setBio, value)}
        style={[
          styles.input,
          { backgroundColor: isDarkMode ? "#555" : "#fff", color: isDarkMode ? "#fff" : "#333" },
        ]}
      />

        <TouchableOpacity style={styles.button} onPress={guardarPerfil}>
        <Text style={styles.buttonText}>Guardar Ahora</Text>
      </TouchableOpacity>

      {saved && (
        <View style={styles.savedContainer}>
          <Text style={styles.savedText}>¡Guardado!</Text>
          <Text style={styles.resultText}>
            Tu nombre es: {nombre}, tienes {edad} años.
          </Text>
          {bio ? <Text style={styles.resultText}>Biografia: {bio}</Text> : null}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 15,
    padding: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: "#007acc",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  savedContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
  },
  savedText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  resultText: {
    fontSize: 16,
  },
});

export default ProfileScreen;