import { TextInput, SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { handleLogin } from '../services/authService';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const navigateToRegister = () => {
    navigation.navigate('Register'); // Ensure this matches the registered screen name
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    handleLogin(email, password);
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Login</Text>

        <TextInput
          style={styles.inputField}
          placeholder="Your Email"
          onChangeText={newText => setEmail(newText)}
          defaultValue={email}
        />

        <TextInput
          style={styles.inputField}
          placeholder="Your Password"
          onChangeText={newText => setPassword(newText)}
          defaultValue={password}
        />

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Login Button</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={navigateToRegister}>
          <Text style={styles.buttonText}>Create an account</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}

export default LoginScreen;

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
