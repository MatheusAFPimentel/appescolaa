// components/CustomButton.js
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0033A0', // Azul
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: '#FFFFFF', // Branco
    fontSize: 18,
  },
});

export default CustomButton;
