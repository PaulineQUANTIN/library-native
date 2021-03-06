import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import LibraryScreen from './screens/LibraryScreen';
import BookScreen from './screens/BookScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{
        headerStyle: {
          backgroundColor: '#00897B'
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold'    
        }
      }}>
        <Stack.Screen 
        name="home" 
        component={HomeScreen} 
        options={{
          title: "Bienvenue"}} />
        <Stack.Screen name="details" component={DetailsScreen} />
        <Stack.Screen 
        name="library" 
        component={LibraryScreen} 
        options={{
          title: "Bibliothèque"}}/>
        <Stack.Screen 
        name="book" 
        component={BookScreen} 
        options={{
          title: "Détails d'un livre"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}