import {View, Text} from 'react-native';
import LoginInput from '../components/login/LoginInput';

export default function Login() {
  return (
    <View className="flex items-center justify-center bg-ternary-blue h-full w-full p-2">
      <View className="flex items-center justify-center w-full h-3/4">
        <View className="flex items-center justify-center w-full h-4/6 pt-5 pb-5">
          <Text className="font-inter font-bold text-primary-blue text-3xl text-center pb-7 w-full h-1/5-">
            Login
          </Text>
          <View className="pl-3 pr-3 pt-3 w-full h-1/5">
            <LoginInput placeholder='Enter Your E-mail' />
          </View>
          <View className="pl-3 pr-3 pt-3 w-full h-1/5">
            <LoginInput placeholder='Enter your Password' />
          </View>
          <Text className="font-inter text-primary-blue text-xl text-center w-full h-1/5 pt-3">Forgot password</Text>
          <Text className="font-inter font-semibold text-red text-xl text-center w-full h-1/5 pt-3">{/*error*/}</Text>
        </View>
        <View className="w-full h-1/6 bg-orange"></View>
        <View className="w-full h-1/6 bg-red"></View>
      </View>
    </View>
  );
}
