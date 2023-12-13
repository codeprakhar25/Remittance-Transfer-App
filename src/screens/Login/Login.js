import React, { useState,useEffect } from 'react'
import { Button,Image,Text,View } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { GoogleSignin,statusCodes } from 'react-native-google-signin';
import { useGetTransferQuery,useGetTransferbyUserIdQuery } from '../../app/api/apiSlice';
import Header from '../../app/components/Header';

const Login = ({navigation}) => {
  const [userinfo,setUserInfo]=useState(null)
  useEffect(() => {
    checkStoredAuthToken();
  }, []);

  const checkStoredAuthToken = async () => {
    try {
      const user = await GoogleSignin.getCurrentUser();
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

     
  return (
    <>
    <Header text='Login'/>
    <View style={{backgroundColor:'#ffffff',alignItems:'center',height:'70%',marginTop:'20%',display:'flex',justifyContent:'center',}}>
      <Image
      style={{height:150,width:150,marginBottom:15}}
      source={require('../../app/assets/logo.jpg')}
      />
    <Text style={{fontSize:24,fontFamily:'sans-serif',fontWeight:700,color:'black',marginBottom:20}}>
      Welcome to Remit
    </Text>
<Text style={{fontSize:19,fontFamily:'sans-serif',fontWeight:600}}>Login with Your Google Account to start</Text>

       <GoogleSigninButton
    style={{ width: 192, height: 48,marginTop:15 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={signInWithGoogle}
  />
{/* <Button title={'Sign in with Google'} onPress={() =>  {
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
}} /> */}
    </View>
    </>
  )
}

export default Login
