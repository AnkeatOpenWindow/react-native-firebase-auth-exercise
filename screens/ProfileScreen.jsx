import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User signed out successfully');
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Error signing out: ', error);
      });
  };

  return (
    <SafeAreaView>
      <View style={{ padding: 20 }}>
        <Text>Profile</Text>

        {/* TODO: Show logged in user info */}
        <Text>Email here</Text>
        <Text>Username here</Text>

        <Button 
          title="Sign Out"
          color="green"
          onPress={handleLogout} />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  inputField: {
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: 15,
  },
  button: {
    backgroundColor: 'green',
    textAlign: 'center',
    padding: 10,
    marginTop: 30,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
