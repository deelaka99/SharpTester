import {TouchableOpacity, Text} from 'react-native';
export default function LoginBtn() {
  return (
    <TouchableOpacity className="flex items-center justify-center bg-primary-blue h-full w-full rounded-full">
      <Text className="text-xl text-ternary-blue p-3">Login</Text>
    </TouchableOpacity>
  );
}
