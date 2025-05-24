import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props={
  titulo: string;
  onPress: () => void;
};

export default function CustomButton({ titulo, onPress }: Props) {

  return (
    <TouchableOpacity 
      style={styles.button}
        onPress={onPress}>
      <Text style={styles.text}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 8,
    alignItems: "center"
  },
  text: {
    color: "white",
    fontWeight: "bold"
  }
});

 
 