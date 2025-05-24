import React from "react";
import { TouchableOpacity, Text,StyleSheet } from "react-native";


type Props = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
};


const CustomButton = ({ title }:Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={{ color: "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;


const styles =  StyleSheet.create({
        button: {
            padding: 12, 
            margin: 10,
            borderRadius: 6,
            backgroundColor: '#1c1c30',
            borderWidth: 10,
            borderColor: '#ccc'
        },
        text:{
            color: '#ededf7',
            fontWeight: 'bold'
        }
    })
