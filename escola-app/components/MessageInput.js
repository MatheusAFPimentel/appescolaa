// components/MessageInput.js
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Enviar" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF', // Branco
    borderTopWidth: 1,
    borderTopColor: '#0033A0', // Azul
  },
  input: {
    flex: 1,
    padding: 10,
    borderColor: '#0033A0', // Azul
    borderWidth: 1,
    borderRadius: 5,
    marginRight: 10,
  },
});

export default MessageInput;
