import React from "react";
import { ImageBackground, StyleSheet,View ,Text} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Header() {
    return (
        <ImageBackground 
        source={require('../../assets/banner_facebook.jpg')}
        style={styles.header}>
            
        </ImageBackground>
    )
  }

  const styles=StyleSheet.create({
    header:{
        
        width:'100%',
        height:180 
    }
  })

  