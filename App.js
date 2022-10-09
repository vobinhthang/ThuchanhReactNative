import React from "react";
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,Alert, Button, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "./src/screens/HomeScreen";
const Stack = createStackNavigator()

export default function App() {
  return (
    // <SafeAreaView>
    //   <LoginScreen></LoginScreen>
    // </SafeAreaView>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen"
            screenOptions={{
            headerShown: false, }}>
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


