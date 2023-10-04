import { View, Text } from 'react-native'
import Splash from './src/screens/Splash'
import Login from './src/screens/Login'

export default function App() {
  return (
    <View className="h-full w-full flex items-center justify-center">
      <Login/>
    </View>
  )
}