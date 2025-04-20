import React from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const useAuth = () => {
  const onSubmit = async (data: any) => {
    try {
      const user = await auth().signInWithEmailAndPassword(
        data.email,
        data.password,
      );
      console.log('user', user);
    } catch (err: any) {
      Alert.alert('Login Failed', err.message);
    }
  };

  const registerUser = async (data: any) => {
    try {
      const userCredential = await auth().createUserWithEmailAndPassword(
        data.email,
        data.password,
      );
      return userCredential;
    } catch (error: any) {
      console.error('Register error:', error.code, error.message);
      throw error;
    }
  };

  return {onSubmit, registerUser};
};
