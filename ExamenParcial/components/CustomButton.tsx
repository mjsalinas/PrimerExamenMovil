import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";


type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
};


const CustomButton = ({ title,onPress }:Props) => {
  return (
    <TouchableOpacity onPress={onPress}  style={styles.button}>
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;


const styles =  StyleSheet.create({
        button: {
            padding: 15, 
            margin: 10,
            borderRadius: 6,
            backgroundColor: '#208008',
            borderWidth: 2,
            borderColor: '#ccc'
        },
        text:{
            color: '#ededf7',
            fontWeight: 'bold'
        }
    })
