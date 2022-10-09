import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from "../components/Header";
import FormRegister from "../components/FormRegister";
export default function LoginScreen() {
    return (
      <View >
        <Header></Header>
        <FormRegister></FormRegister>
      </View> 
    );
  }