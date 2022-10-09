import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
} from 'react-native';

export default function MainHome() {
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
                        let user = JSON.parse(value);
                        setEmail(user.Email);
                        setPass(user.Pass);
                    }
                })
        } catch (error) {
            console.log(error);
        }
    }

    // const updateData = async () => {
    //     if (email.length == 0) {
    //         Alert.alert('Cảnh báo!', 'Mời nhập thông tin.')
    //     } else {
    //         try {
    //             var user = {
    //                 Name: name
    //             }
    //             await AsyncStorage.mergeItem('UserData', JSON.stringify(user));
    //             Alert.alert('Success!', 'Your data has been updated.');
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }

    return (
        <View style={styles.body}>
            <Text style={[
                
                styles.text
            ]}>
                Welcome {email} !
            </Text>
            <Text style={[
                
                styles.text
            ]}>
                Your password is {pass}
            </Text>
            {/* <TextInput
                style={styles.input}
                placeholder='Enter your name'
                value={name}
                onChangeText={(value) => setName(value)}
            /> */}
            
        </View>
    )
}

const styles = StyleSheet.create({
        body: {
            flex: 1,
            alignItems: 'center',
            justifyContent:'center'
        },
        text: {
            fontSize: 20,
            margin: 10,
        },
        input: {
            width: 300,
            borderWidth: 1,
            borderColor: '#555',
            borderRadius: 10,
            backgroundColor: '#ffffff',
            textAlign: 'center',
            fontSize: 20,
            marginTop: 130,
            marginBottom: 10,
        }
    })
