import React from 'react'
import Home from '../../screens/Home/Home'
import History from '../../screens/History/History'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../../screens/Profile/Profile'
import {StyleSheet, Text, View, Image} from 'react-native';


const Tab = createBottomTabNavigator();
const Routes = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen
      name="Getting Started"
      component={Home}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            // style={styles.bottomTabIcon}
            source={require('../assets/Home.png')}
          />
        ),
        tabBarLabel: `Home`,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="MyRentMachines"
      component={History}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            // style={styles.bottomTabIcon}
            source={require('../assets/Home.png')}
          />
        ),
        tabBarLabel: `History`,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      }}
    />
    <Tab.Screen
      name="Profile"
      component={Profile}
    //   initialParams={{userid: 5}}
      options={{
        tabBarIcon: ({color}) => (
          <Image
            // style={styles.bottomTabIcon}
            source={require('../assets/profile.png')}
          />
        ),

        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'gray',
        tabBarLabel: `Profile`,
        headerShown: false,
      }}
    />
  </Tab.Navigator>
  )
}

export default Routes
