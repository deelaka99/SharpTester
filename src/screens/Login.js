import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
} from 'react-native';
import Google from '../assets/images/google.png';

export default function Login({navigation}) {
  return (
    <View className="flex-1 w-full items-center justify-center bg-ternary-blue">
      <View className="px-4 w-full max-w-sm">
        <Text className="text-4xl text-center font-semibold mb-6 text-primary-blue">
          Login
        </Text>

        <View className="flex flex-col gap-4">
          <TextInput
            placeholder="Enter email address"
            className="bg-white rounded-full px-5"
          />
          <TextInput
            placeholder="Enter password"
            className="bg-white rounded-full px-5"
          />
        </View>

        <View className="flex flex-row justify-between items-center my-8">
          <View className="flex-row items-center">
            <Pressable className="bg-white h-6 w-6 rounded-sm mr-2 border border-primary-blue"></Pressable>
            <Text className="text-primary-blue text-sm">Remember me</Text>
          </View>
          <Pressable>
            <Text className="text-primary-blue text-sm">Forgot password</Text>
          </Pressable>
        </View>

        <View className="flex flex-col gap-4">
          <TouchableOpacity
            onPress={() => navigation.navigate('home')}
            className="flex items-center justify-center bg-primary-blue rounded-full">
            <Text className="text-xl text-ternary-blue p-3">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex items-center justify-center bg-white rounded-full border border-primary-blue">
            <View className="flex items-center justify-center">
              <Text className="text-center text-xl text-primary-blue p-2">
                <Image source={Google} className="h-6 w-6" />
                &nbsp; Sign in with Google
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
