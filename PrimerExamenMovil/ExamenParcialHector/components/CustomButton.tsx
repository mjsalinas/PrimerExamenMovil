import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';

};


export default function CustomButton({title, onPress, variant = 'primary'}: Props) {
  const styles = getStyles('primary');
  return(
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

// Estilo
function getStyles(type: string) {
  return StyleSheet.create({
    button: {
      backgroundColor: type === 'primary' ? '#007BFF' : '#6C757D',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
    },
    text: {
      color: '#FFFFFF',
      fontSize: 16,
    },
  });
}