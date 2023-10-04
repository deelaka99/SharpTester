import {View, Image} from 'react-native';
import Logo from '../../assets/images/logo.png';

export default function BrandName() {
  return (
    <View className="flex items-center justify-center h-[100px] w-[200px]">
      <Image source={Logo} className="" resizeMode='center' />
    </View>
  );
}
