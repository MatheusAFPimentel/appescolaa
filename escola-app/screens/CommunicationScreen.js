// screens/CommunicationScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import api from '../api'; // Importa a configuração da API

const CommunicationScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await api.get('/messages');
        setMessages(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.messageItem}>
      <Text style={styles.messageTitle}>{item.subject}</Text>
      <Text style={styles.messageText}>{item.content}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Comunicação</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8', // Cor de fundo clara
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0033A0', // Azul
    marginBottom: 20,
    textAlign: 'center',
  },
  messageItem: {
    backgroundColor: '#FFFFFF', // Branco
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  messageTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0033A0', // Azul
  },
  messageText: {
    fontSize: 16,
    color: '#333333', // Cinza escuro
  },
});

export default CommunicationScreen;
