import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';

const Profile = () => {
  const [userinfo, setUserInfo] = useState(null);

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
        setUserInfo(user);
        console.log('Stored UserInfo Information:', user);
        // }
      }
    } catch (error) {
      console.error('Error checking stored authentication token:', error);
    }
  };

  return (
    <View>
      <Text>Profile</Text>
      {userinfo && (
        <View>
          <Text>Name: {userinfo.user.name}</Text>
          <Text>Email: {userinfo.user.email}</Text>
          <Image   source={{ uri: userinfo.user.photo }}
              style={{ width: 100, height: 100 }}/>
        </View>
      )}
    </View>
  );
};

export default Profile;
