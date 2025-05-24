import React from "react";
import { TouchableOpacity,Text, GestureResponderEvent, StyleSheet } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
};

const CustomButton = ({ label, onPress }:Props) => {
  return (
    <TouchableOpacity style={{ backgroundColor: "blue", padding: 10 }} onPress={onPress}>
      <Text style={{ color: "white" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
