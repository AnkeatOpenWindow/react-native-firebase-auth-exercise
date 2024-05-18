import React, { useState } from 'react';
import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { handleRegistration } from '../services/authService';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const register = () => {
    handleRegistration(email, password)
      .then(() => {
        // Navigate to ProfileScreen after successful registration
        navigation.navigate('Profile');
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Register</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={register}>
          <Text style={styles.buttonText}>Register Button</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15
  }, 
  button: {
    backgroundColor: "green",
    textAlign: 'center',
    padding: 10,
    marginTop: 30
  },
  buttonText: {
    textAlign: 'center',
    color: 'white'
  }
});

export default RegisterScreen;
