import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

// Tipado de las props
type CustomButtonProps = {
  label: string;
  onPress: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginVertical: 5
  },
  text: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default CustomButton;
