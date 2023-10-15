import React, {useState, createRef} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {auth, db, logout} from '../config/firebase';
import {ref, get} from 'firebase/database';
import {signInWithEmailAndPassword} from 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Pressable,
  Keyboard,
} from 'react-native';
import Google from '../assets/images/google.png';

export default function Login({navigation}) {
  const [user] = useAuthState(auth);
  const [_user, setUser] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      setErrortext('Please fill Email');
      return;
    }
    if (!userPassword) {
      setErrortext('Please fill Password');
      return;
    }

    if (user === null) {
      signInWithEmailAndPassword(auth, userEmail, userPassword)
        .then(() => {
          const currentUser = auth.currentUser;

          // Get the user type from Firebase Realtime Database
          const userTypeRef = ref(db, `users/${currentUser.uid}/type`);

          // Use the `get` function to fetch the user type
          get(userTypeRef)
            .then(snapshot => {
              if (snapshot.exists()) {
                const userType = snapshot.val();

                // Check if the user type is "lab"
                if (userType === 'user') {
                  // Get the blocked statues from Firebase Realtime Database
                  const userBlockRef = ref(
                    db,
                    `users/${currentUser.uid}/blocked`,
                  );
                  // Use the `get` function to fetch the blocked status
                  get(userBlockRef)
                    .then(snapshot => {
                      if (snapshot.exists()) {
                        const blockedStatus = snapshot.val();
                        // Check if the blocked status is "false"
                        if (blockedStatus === false) {
                          setUser(currentUser);
                          AsyncStorage.setItem("gmail", "true");
                          if (currentUser) navigation.navigate('home');
                          setErrortext('');
                        } else {
                          logout();
                          setErrortext('Your account is blocked');
                        }
                      }
                    })
                    .catch(error => {
                      console.log('Blocked status getting error :', error);
                      setErrortext('Your account is blocked');
                    });
                } else {
                  logout();
                  setErrortext("Your account type isn't match!");
                }
              } else {
                // If the lab doesn't exist for the user, show an error
                logout();
                setErrortext('Your account is not found! Register to the app');
              }
            })
            .catch(error => {
              console.log('Error getting user type: ', error);
              setErrortext('Error getting user type');
            });
        })
        .catch(e => {
          console.log('Sign in errors: ', e);
          setErrortext("Email or password doesn't match");
        });
    }
  };

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
            onChangeText={UserEmail => setUserEmail(UserEmail)}
            autoCapitalize="none"
            keyboardType="email-address"
            onSubmitEditing={() =>
              passwordInputRef.current && passwordInputRef.current.focus()
            }
            underlineColorAndroid="#f000"
            blurOnSubmit={false}
          />
          <TextInput
            placeholder="Enter password"
            className="bg-white rounded-full px-5"
            onChangeText={UserPassword => setUserPassword(UserPassword)}
            keyboardType="default"
            ref={passwordInputRef}
            onSubmitEditing={Keyboard.dismiss}
            blurOnSubmit={false}
            secureTextEntry={true}
            returnKeyType="next"
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
          {errortext != '' ? (
            <Text className="text-red text-center font-semibold"> {errortext} </Text>
          ) : null}
          <TouchableOpacity
            onPress={handleSubmitPress}
            className="flex items-center justify-center bg-primary-blue rounded-full">
            <Text className="text-xl text-ternary-blue p-3">Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex items-center justify-center bg-white rounded-full border border-primary-blue"
            onPress={() => navigation.navigate('home')}>
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
