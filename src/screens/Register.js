import React, {useState} from 'react';
import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Pressable,
  ScrollView,
  Modal,
  Alert,
} from 'react-native';

export default function Register({navigation}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const onChange = (e, selectedDate) =>{
    setSelectedDate(selectedDate);
    setDatePickerVisible(false)
  }

  return (
    <View className="flex-1 w-full items-center justify-center bg-ternary-blue">
      <ScrollView className="w-full h-full">
        <View className="px-4 py-10 w-full max-w-sm">
          <Text className="text-4xl text-center font-semibold mb-6 text-primary-blue">
            Register
          </Text>

          <View className="flex flex-col gap-4">
            <TextInput
              placeholder="Enter email address"
              className="bg-white rounded-full px-5"
            />
            <TextInput
              placeholder="Enter a password"
              className="bg-white rounded-full px-5"
            />
            <TextInput
              placeholder="Confirm your password"
              className="bg-white rounded-full px-5"
            />
            <Pressable onPress={() => setModalVisible(true)}>
              <Text className="bg-white rounded-full px-5 py-4">
                {selectedDate}
              </Text>
            </Pressable>
            <TextInput
              placeholder="Enter your Weight (Kg)"
              className="bg-white rounded-full px-5"
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Enter your Height (cm)"
              className="bg-white rounded-full px-5"
              keyboardType="numeric"
            />
            <View className="flex flex-row justify-center items-center my-8">
              <Pressable>
                <Text className="text-primary-blue font-inter text-lg">
                  Have you got an account?
                </Text>
              </Pressable>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('home')}
            className="flex items-center justify-center bg-primary-blue rounded-full">
            <Text className="text-xl text-ternary-blue p-3">Register</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {modalVisible ? (
        <View className="flex-1 items-center justify-center mt-2">
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View className="flex-1 items-center justify-center shadow ">
              <View className="m-20 bg-white rounded-md p-5 items-center shadow border border-ternary-blue">
                <Text className="mb-16 text-center">Hello World!</Text>
                <Pressable
                  className="rounded-md p-2 bg-primary-blue"
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text className="text-ternary-blue font-bold text-center">
                    Hide Modal
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      ) : null}
    </View>
  );
}
