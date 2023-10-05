import React, {useEffect} from 'react';
import {View, Image, TouchableOpacity, Text, BackHandler} from 'react-native';
import Logo from '../assets/images/logo.png';

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
      <View className="flex items-center justify-center w-full h-3/5 p-3">
        <View className="flex items-center justify-center w-full h-1/5">
          <Image source={Logo} className="" resizeMode="center" />
        </View>
        <View className="flex items-center justify-center h-3/5 w-full">
          <TouchableOpacity onPress={()=>navigation.navigate('login')} className="flex items-center justify-center w-5/6 h-1/4 bg-primary-blue rounded-full">
            <Text className="font-inter text-ternary-blue text-2xl shadow-md">
              Login
            </Text>
          </TouchableOpacity>
          <Text>&nbsp;</Text>
          <TouchableOpacity className="flex items-center justify-center w-5/6 h-1/4 bg-primary-blue rounded-full">
            <Text className="font-inter text-ternary-blue text-2xl shadow-md">
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
