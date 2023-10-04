import {TouchableOpacity, Text} from 'react-native';
export default function GoogleBtn() {
  return (
    <TouchableOpacity className="flex items-center justify-center bg-primary-blue h-full w-full rounded-full">
      <Text className="text-xl text-ternary-blue">Sign in with Google</Text>
    </TouchableOpacity>
  );
}
