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
      backgroundColor: type === 'primary' ? '#fff702' : '#6C757D',
      padding: 10,
      borderRadius: 8,
      alignItems: 'center',
    },
    text: {
      color: '#050505',
      fontSize: 22,
    },
  });
}