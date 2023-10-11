import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, BackHandler} from 'react-native';
import image from '../assets/images/logRegImg1.png';

export default function LogReg({navigation}) {
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
    <View className="h-full w-full flex items-center justify-center bg-ternary-blue">
      <View className="flex items-center justify-center w-full h-2/5 pl-3 pr-3 pt-7">
        <Image source={image} className="h-full w-full" resizeMode="center" />
      </View>
      <View className="flex justify-center w-full h-1/5 pr-7 pl-7 pt-10">
        <Text className="text-4xl font-bold text-left text-blue2">
          Welcome!
        </Text>
        <Text className="text-xl font-light text-blue2">
          Log in with your data that you entered during your registration.
        </Text>
      </View>
      <View className="flex items-center justify-center h-2/5 w-full">
        <TouchableOpacity
          onPress={() => navigation.navigate('login')}
          className="flex items-center justify-center w-5/6 h-1/5 bg-primary-blue rounded-full">
          <Text className="font-inter text-ternary-blue text-2xl shadow-md">
            Login
          </Text>
        </TouchableOpacity>
        <Text>&nbsp;</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('register')}
          className="flex items-center justify-center w-5/6 h-1/5 bg-white rounded-full border border-primary-blue">
          <Text className="font-inter text-primary-blue text-2xl shadow-md">
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
