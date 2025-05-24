import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [biografia, setBiografia] = useState('');

  const handleGuardar = () => {
    if (nombre && edad && biografia) {
      Alert.alert('Perfil guardado correctamente');
    } else {
      Alert.alert('Por favor, complete todos los campos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

      <Text style={styles.label}>Edad:</Text>
      <TextInput style={styles.input} value={edad} onChangeText={setEdad} keyboardType="numeric" />

      <Text style={styles.label}>Biografía:</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        value={biografia}
        onChangeText={setBiografia}
        multiline
      />

      <Button title="Guardar" onPress={handleGuardar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: 'center',
  },
  label: {
    fontSize: 16, fontWeight: 'bold', marginTop: 10,
  },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5,
  },
});
