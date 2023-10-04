import {View, Text} from 'react-native';
import BrandName from '../components/splash/BrandName';
import DevelopedBy from '../components/splash/DevelopedBy';

export default function Splash() {
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
