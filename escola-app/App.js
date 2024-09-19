// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import AgendaScreen from './screens/AgendaScreen'; // Crie essas telas conforme necessário
import CommunicationScreen from './screens/CommunicationScreen'; // Crie essas telas conforme necessário
import NotesScreen from './screens/NotesScreen'; // Crie essas telas conforme necessário

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#0033A0' }, // Azul
          headerTintColor: '#FFF', // Branco
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Agenda" component={AgendaScreen} />
        <Stack.Screen name="Comunicação" component={CommunicationScreen} />
        <Stack.Screen name="Notas" component={NotesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
