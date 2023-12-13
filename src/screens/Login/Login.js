import React, { useState,useEffect } from 'react'
import { Button,Image,Text,View } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { GoogleSignin,statusCodes } from 'react-native-google-signin';
import { useGetTransferQuery,useGetTransferbyUserIdQuery } from '../../app/api/apiSlice';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [userinfo,setUserInfo]=useState(null)
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
          console.log('Stored User Information:', user);
          setUserInfo(user);
          navigation.navigate("Routes");
        // }
      }
    } catch (error) {
      console.error('Error checking stored authentication token:', error);
    }
  };
  const signInWithGoogle = async () => {
      GoogleSignin.configure({
        androidClientId:'1058979420267-ob6r5jjla17b5b802k4se7ds05aln4tt.apps.googleusercontent.com',
        webClientId: '1058979420267-eghlnl66lrs29ti9sbjg4vhqivqsakog.apps.googleusercontent.com', 
        offlineAccess: true,
        forceCodeForRefreshToken: true,
      });
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo);
setUserInfo(userInfo);
navigation.navigate("Routes");

        } catch (error) {
          console.error('Google Sign-In Error:', error);
        }
      };
  
     const id="116802752130870783622";
      const { data:transfers, error,isSuccess, isLoading } = useGetTransferbyUserIdQuery(id);
      if(isSuccess){
        console.log(transfers);

      } 
  return (
    <View style={{backgroundColor:'#ffffff',alignItems:'center',height:'70%',marginTop:'28%',display:'flex',justifyContent:'center',}}>
      <Image
      style={{height:100,width:100}}
      source={require('../../app/assets/Home.png')}
      />
    <Text style={{fontSize:24,fontFamily:'sans-serif',fontWeight:700,color:'black'}}>
      Welcome to Remit
    </Text>
<Text style={{fontSize:19,fontFamily:'sans-serif',fontWeight:600}}>Link Your Google Account to start</Text>
<Text style={{fontSize:17,fontFamily:'sans-serif',fontWeight:600}}>India's 1 App in this Category</Text>

       <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={signInWithGoogle}
  />
<Button title={'Sign in with Google'} onPress={() =>  {
    GoogleSignin.configure({
      androidClientId:'1058979420267-ob6r5jjla17b5b802k4se7ds05aln4tt.apps.googleusercontent.com',
  webClientId: '1058979420267-eghlnl66lrs29ti9sbjg4vhqivqsakog.apps.googleusercontent.com', 
  offlineAccess: true,
  forceCodeForRefreshToken: true,
    });
GoogleSignin.hasPlayServices().then((hasPlayService) => {
        if (hasPlayService) {
             GoogleSignin.signIn().then((userInfo) => {
                       console.log(JSON.stringify(userInfo))
                       navigation.navigate("Routes");
             }).catch((e) => {
             console.log("ERROR IS: " + JSON.stringify(e));
             })
        }
}).catch((e) => {
    console.log("ERROR IS: " + JSON.stringify(e));
})
}} />
    </View>
  )
}

export default Login
