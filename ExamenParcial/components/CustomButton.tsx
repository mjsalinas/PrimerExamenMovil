import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props={
  label: string;
  onPress: () => void;
};

const CustomButton: React.FC<Props> = ({ label, onPress }) => {

  return (
    <TouchableOpacity style={{ backgroundColor: "blue", padding: 10 }}>
      <Text style={{ color: "white" }}>{label}</Text>
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

export default CustomButton;
 
 