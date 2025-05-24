import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  const [modoOscuro, setModoOscuro] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Modo oscuro</Text>
      <Switch value={modoOscuro} onValueChange={setModoOscuro} />

      {modoOscuro && (
        <View style={styles.advanced}>
          <Text style={styles.advancedText}>Configuraciones Avanzadas activadas</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, justifyContent: 'center',
  },
  label: {
    fontSize: 18, marginBottom: 10,
  },
  advanced: {
    marginTop: 20, padding: 15, backgroundColor: '#eee', borderRadius: 10,
  },
  advancedText: {
    fontSize: 16,
  },
});
