import React from "react";
import { View } from 'react-native';
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";



export default function LoginScreen() {
    return (
      <View >
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </View> 
    );
  }