import React from 'react';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth, db, logout} from '../config/firebase';
import {ref, get} from 'firebase/database';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';

export default function Dashboard() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Dashboard</Text>
      <Text>{auth.currentUser.email}</Text>
    </View>
  );
}
