import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props={
  title: string;
  onPress: () => void;
};

const CustomButton = ({ label }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: "blue", padding: 10 }}>
      <Text style={{ color: "white" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
 //Hola
 