import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function Register({navigation}) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View className="flex items-center justify-center bg-ternary-blue h-full w-full p-2">
          <View className="flex items-center justify-center w-full h-3/4">
            <View className="flex items-center justify-center w-full h-full">
              <Text className="font-inter font-bold text-primary-blue text-3xl text-center pb-7 w-full h-1/6-">
                Register
              </Text>
              <View className="pl-3 pr-3 pt-3 w-full h-1/6">
                <TextInput
                  placeholder="Enter Your E-mail"
                  className="bg-white h-5/6 w-full rounded-full pl-7 text-lg placeholder:text-primary-blue"
                />
              </View>
              <View className="pl-3 pr-3 pt-3 w-full h-1/6">
                <TextInput
                  placeholder="Enter your Password"
                  className="bg-white h-5/6 w-full rounded-full pl-7 text-lg placeholder:text-primary-blue"
                />
              </View>
              <View className="w-full h-1/6 flex justify-center items-center">
                <Text className="font-inter text-primary-blue text-xl font-bold text-center w-full h-1/2">
                  Forgot password
                </Text>
                <Text className="font-inter text-primary-blue text-xl font-bold text-center w-full h-1/2">
                  {/* error */}
                </Text>
              </View>

              <View className="pl-3 pr-3 flex items-center justify-center w-full h-1/6">
                <TouchableOpacity
                  onPress={() => navigation.navigate('home')}
                  className="flex items-center justify-center bg-primary-blue h-4/6 w-full rounded-full">
                  <Text className="text-xl text-ternary-blue p-3">Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
