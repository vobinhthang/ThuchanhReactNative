import React from "react";
import {StyleSheet,View ,Text, TextInput, TextInputBase, Button,Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
export default function Main() {
    const navigation = useNavigation();
    return (
        <View  style={styles.form}>
            <View>
            <TextInput style={styles.inputEmail}
                        placeholder="Số điện thoại hoặc Email"
                        >
            </TextInput>
            <TextInput style={styles.inputPass}
                        placeholder="Mật khẩu">
            </TextInput>
            <TextInput style={styles.inputPass}
                        placeholder="Nhập lại mật khẩu">
            </TextInput>
            </View>
            <View style={styles.viewIputLogin}>
            <Button title="Đăng ký"
                
               ></Button>
            </View>
          
            <View style={styles.ViewiputLink}>
                <Text style={styles.iputLink}
                onPress={()=>navigation.navigate('LoginScreen')}
                    >
                    Quay lại
                </Text>
                
            </View>
            
        </View>
    )
  }

  const styles=StyleSheet.create({
    

    inputEmail:{
        height: 50,
        marginTop:20,
        marginHorizontal:20,
        borderWidth: 1,
        padding:10,
        borderColor:"gray"
    },
    inputPass:{
        height: 50,
        borderColor:"gray",
        marginHorizontal:20,
        
        borderRightWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        padding:10
    },
    
    
    viewIputLogin: {
        marginHorizontal:20,
        height: 50,
        marginTop:20
      },

      iputLink:{
        color:'#2664f4',
        textAlign:"center",
        fontWeight:"500"
        
      },
    
      ViewiputLink:{
        marginTop:20
      }
  })
