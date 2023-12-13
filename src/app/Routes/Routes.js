import React,{useState,useEffect} from 'react'
import Home from '../../screens/Home/Home'
import History from '../../screens/History/History'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Profile from '../../screens/Profile/Profile'
import {StyleSheet, Text, View, Image} from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';

const Tab = createBottomTabNavigator();
const Routes = ({navigation}) => {
  const [userinfo, setUserInfo] = useState('');

  useEffect(() => {
    checkStoredAuthToken();
  }, []);

  const checkStoredAuthToken = async () => {
    try {
      // const storedToken = await AsyncStorage.getItem('googleAuthToken');
      const user = await GoogleSignin.getCurrentUser();
      // if (storedToken) {
      //   // Authentication token exists, no need to sign in again
      //   console.log('Stored Authentication Token:', storedToken);

      // Get user information based on the stored token
      if (user) {
        console.log('Stored UserInfo Information:', user);
        setUserInfo(user.user.id);
        // }
      }
    } catch (error) {
      console.error('Error checking stored authentication token:', error);
    }
  };
  console.log(userinfo)
  return (
    <Tab.Navigator>
     <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              // style={styles.bottomTabIcon}
              source={require('../assets/Home.png')}
            />
          ),
          tabBarLabel: 'Home',
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        }}
      >
        {() => <Home userinfo={userinfo} navigation={navigation}/>}
        </Tab.Screen>
    <Tab.Screen
      name="History"
      // component=
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
    >
      {() => <History userinfo={userinfo} navigation={navigation} />}
        </Tab.Screen>
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
