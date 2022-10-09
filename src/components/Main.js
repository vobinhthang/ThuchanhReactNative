import React, { useState, useEffect } from "react";
import {StyleSheet,View ,Text, TextInput, TextInputBase, Button,Alert } from "react-native";
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Main( ) {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {
                    if (value != null) {
                        navigation.navigate('HomeScreen');
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    const setData = async () => {
        if (email.length == 0 || pass.length == 0) {
            Alert.alert('Cảnh báo !', 'Xin mời nhập thông tin.')
        } else {
            try {
                var user = {
                    Email: email,
                    Pass: pass
                }
                await AsyncStorage.setItem('UserData', JSON.stringify(user));
                navigation.navigate('HomeScreen');
            } catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <View  style={styles.form}>
            <View>
            <TextInput style={styles.inputEmail}
                        placeholder="Số điện thoại hoặc Email"
                        onChangeText={(value) => setEmail(value)}
                        >
            </TextInput>
            <TextInput style={styles.inputPass}
                        placeholder="Mật khẩu"
                        onChangeText={(value) => setPass(value)}
                        >
            </TextInput>
            </View>
            <View style={styles.viewIputLogin}>
            <Button title="Đăng nhập"
                 onPress={async () => {
                    if (email.length == 0 || pass.length == 0) {
                        Alert.alert('Cảnh báo !', 'Xin mời nhập thông tin.')
                    } else {
                        try {
                            var user = {
                                Email: email,
                                Pass: pass
                            }
                            await AsyncStorage.setItem('UserData', JSON.stringify(user));
                            navigation.navigate('HomeScreen');
                        } catch (error) {
                            console.log(error);
                        }
                    }
                }}
               ></Button>
            </View>
          
            <View style={styles.ViewiputLink}>
            <Text style={styles.iputLink}
                >
                Quên mật khẩu?
            </Text>
            </View >
            <View style={styles.ViewiputLink}>
                <Text style={styles.iputLink}
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
        marginBottom:20,
        borderRightWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        padding:10
    },
    
    viewIputLogin: {
        marginHorizontal:20,
        height: 50,
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
