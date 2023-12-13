import React, { useEffect, useState } from 'react';
import { View, Text, Image,Button,TouchableOpacity,StyleSheet } from 'react-native';
import { GoogleSignin } from 'react-native-google-signin';

const Profile = ({navigation}) => {
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
  const handlesignout = async () => {
    GoogleSignin.configure({
        androidClientId:'1058979420267-ob6r5jjla17b5b802k4se7ds05aln4tt.apps.googleusercontent.com',
    webClientId: '1058979420267-eghlnl66lrs29ti9sbjg4vhqivqsakog.apps.googleusercontent.com', 
    offlineAccess: true,
    forceCodeForRefreshToken: true,
      });
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      navigation.navigate("Login");
      console.log("successfullly Logged out")
    } catch (error) {
      console.error('Google Sign-Out Error:', error);
    }
  };
  return (
    <View>
      {/* <Text>Profile</Text> */}
      {userinfo && (
        <View style={{width:'90%',backgroundColor:"#ffffff",alignItems:'center',margin:'5%',padding:'5%'}}>
          <Image   source={{ uri: userinfo.user.photo }}
              style={{ width: 150, height: 150 }}/>
          <Text style={{fontSize:17,color:'#00000',fontWeight:500,marginTop:12}}>Name: {userinfo.user.name}</Text>
          <Text style={{fontSize:17,color:'#00000',fontWeight:500,marginTop:12}}>Email: {userinfo.user.email}</Text>
          {/* {
            userinfo.user.email_verified==true ?
            <></>
            :
            ""
          } */}
        </View>
      )}
<TouchableOpacity style={styles.signbutton} onPress={()=>{handlesignout()}}>
  <Text style={{color:"#ffffff"}}>Logout</Text>
</TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles=StyleSheet.create({
    
      signbutton: {
        height: 56,
        margin: 15,
        backgroundColor: '#006400',
        // borderRadius: 10,
        borderStyle: 'solid',
        //   borderWidth:2,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 2,
      }, 
})