import React from 'react'
import { Button } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { GoogleSignin } from 'react-native-google-signin';

GoogleSignin.configure({
  webClientId: '861257771945-a1cffpjh5n0kfbg4fkvnnvqckcp55aor.apps.googleusercontent.com', // replace with your web client ID
  offlineAccess: true,
});

const Login = () => {
    const signInWithGoogle = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          console.log(userInfo);
          // Handle user information (userInfo.user) as needed
        } catch (error) {
          console.error('Google Sign-In Error:', error);
        }
      };
      const handlesignout = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        } catch (error) {
          console.error('Google Sign-Out Error:', error);
        }
      };
  return (
    <>
       <GoogleSigninButton
    style={{ width: 192, height: 48 }}
    size={GoogleSigninButton.Size.Wide}
    color={GoogleSigninButton.Color.Dark}
    onPress={signInWithGoogle}
  />

  <Button onPress={()=>{handlesignout}} title='Log out'/>
    </>
  )
}

export default Login
