import React, {useEffect} from 'react';
import {View, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BrandName from '../components/splash/BrandName';
import DevelopedBy from '../components/splash/DevelopedBy';
import {auth} from "../config/firebase";


export default function Splash() {
  const navigation = useNavigation();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigation.navigate('logReg'); // Navigate to the TargetScreen
    }, 3000); // Replace 3000 with the desired time delay in milliseconds

    // Clear the timeout when the component unmounts (optional)
    return () => clearTimeout(timeoutId);
  }, [navigation]);

  useEffect(() => {
    // Disable the back button press handler for this screen
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        return true; // Return true to block the back navigation
      },
    );

    return () => {
      // Remove the back button press handler when the component unmounts
      backHandler.remove();
    };
  }, []);

  return (
    <View className="h-full w-full bg-primary-blue">
      <View className="flex items-center justify-center w-full h-5/6">
        <BrandName />
      </View>
      <View className="flex items-center justify-center w-full h-1/6">
        <DevelopedBy />
      </View>
    </View>
  );
}
