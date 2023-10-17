import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faGauge} from '@fortawesome/free-solid-svg-icons/faGauge';
import {faCalendarCheck} from '@fortawesome/free-solid-svg-icons/faCalendarCheck';
import {faFlask} from '@fortawesome/free-solid-svg-icons/faFlask';
import {faCalendarPlus} from '@fortawesome/free-solid-svg-icons/faCalendarPlus';

import NearLabs from '../screens/NearLabs';
import CurrentAppoinments from '../screens/CurrentAppointments';
import NewAppoinment from '../screens/NewAppoinment';
import Dashboard from '../screens/Dashboard';

const Tab = createBottomTabNavigator();

import React, {useState} from 'react';

export default function BottomTabs() {
  const [dashboard, setDashboard] = useState(false);
  const [cAppintments, setCAppintments] = useState(false);
  const [nAppointments, setNAppointments] = useState(false);
  const [nearLabs, setNearLabs] = useState(false);

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 70,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        options={() => ({
          headerShown: false,
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faGauge}
                color={dashboard ? '#42C2FF' : '#748c94'}
              />
              <Text
                style={{
                  color: dashboard ? '#42C2FF' : '#748c94',
                  fontSize: 8,
                }}>
                Dashboard
              </Text>
            </View>
          ),
        })}
        name="dashboard"
        component={Dashboard}
        listeners={{
          tabPress: () => {
            setDashboard(true);
            setCAppintments(false);
            setNAppointments(false);
            setNearLabs(false);
          },
        }}
      />
      <Tab.Screen
        options={() => ({
          headerShown: false,
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faCalendarCheck}
                color={cAppintments ? '#42C2FF' : '#748c94'}
              />
              <Text
                style={{
                  color: cAppintments ? '#42C2FF' : '#748c94',
                  fontSize: 8,
                }}>
                Current appoinments
              </Text>
            </View>
          ),
        })}
        name="currentAppoinments"
        component={CurrentAppoinments}
        listeners={{
          tabPress: () => {
            setDashboard(false);
            setCAppintments(true);
            setNAppointments(false);
            setNearLabs(false);
          },
        }}
      />
      <Tab.Screen
        options={() => ({
          headerShown: false,
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faCalendarPlus}
                color={nAppointments ? '#42C2FF' : '#748c94'}
              />
              <Text
                style={{
                  color: nAppointments ? '#42C2FF' : '#748c94',
                  fontSize: 8,
                }}>
                New appoinments
              </Text>
            </View>
          ),
        })}
        name="newAppointment"
        component={NewAppoinment}
        listeners={{
          tabPress: () => {
            setDashboard(false);
            setCAppintments(false);
            setNAppointments(true);
            setNearLabs(false);
          },
        }}
      />
      <Tab.Screen
        options={() => ({
          headerShown: false,
          tabBarIcon: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <FontAwesomeIcon
                icon={faFlask}
                color={nearLabs ? '#42C2FF' : '#748c94'}
              />
              <Text
                style={{
                  color: nearLabs ? '#42C2FF' : '#748c94',
                  fontSize: 8,
                }}>
                Near Labs
              </Text>
            </View>
          ),
        })}
        name="nearLabs"
        component={NearLabs}
        listeners={{
          tabPress: () => {
            setDashboard(false);
            setCAppintments(false);
            setNAppointments(false);
            setNearLabs(true);
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
