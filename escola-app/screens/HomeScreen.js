// screens/HomeScreen.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton'; // Corrija o caminho aqui

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: 'https://scontent.frec7-1.fna.fbcdn.net/v/t39.30808-6/292310336_430341979099724_8466521486770484698_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=dkw4D6G5cMQQ7kNvgH93ONW&_nc_ht=scontent.frec7-1.fna&_nc_gid=AL75jkhg2C1rqEP4q19dSMT&oh=00_AYAupXgvneamUdBLLot10JapjkuaFUaaVDweQbLgW__ZmQ&oe=66F22A6A' }} // Substitua pelo URL do seu logo
      />
      <Text style={styles.title}>Bem-vindo ao App Escolar</Text>
      <Text style={styles.description}>
        Aqui você pode acessar a agenda, comunicação e acompanhar suas notas.
      </Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          title="Ver Agenda"
          onPress={() => navigation.navigate('Agenda')} // Navegar para a tela de Agenda
        />
        <CustomButton
          title="Comunicação"
          onPress={() => navigation.navigate('Comunicação')} // Navegar para a tela de Comunicação
        />
        <CustomButton
          title="Acompanhar Notas"
          onPress={() => navigation.navigate('Notas')} // Navegar para a tela de Notas
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8', // Cor de fundo clara
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75, // Borda arredondada
    borderColor: '#0033A0', // Azul
    borderWidth: 5,
    shadowColor: '#000', // Sombra
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0033A0', // Azul
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: '#0033A0', // Azul
    textAlign: 'center',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default HomeScreen;
