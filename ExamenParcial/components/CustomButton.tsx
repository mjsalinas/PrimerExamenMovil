import React from "react";
import { TouchableOpacity, Text, GestureResponderEvent, StyleProp, ViewStyle } from "react-native";

type Props = {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle>;
};

const CustomButton: React.FC<Props> = ({ label, onPress, style }) => {
  return (
    <TouchableOpacity
      style={[{ backgroundColor: "pink", padding: 10, borderRadius: 5 }, style]}
      onPress={onPress}
    >
      <Text style={{ color: "white", textAlign: "center" }}>{label}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

