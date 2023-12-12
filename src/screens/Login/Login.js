import React from 'react'
import { Button } from 'react-native';
import { GoogleSigninButton } from 'react-native-google-signin';
import { GoogleSignin,statusCodes } from 'react-native-google-signin';
import { useGetTransferQuery,useGetTransferbyUserIdQuery } from '../../app/api/apiSlice';

const Login = () => {
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
     const id="116802752130870783622";
      const { data:transfers, error,isSuccess, isLoading } = useGetTransferbyUserIdQuery(id);
      if(isSuccess){
        console.log(transfers);

      } 
  return (
    <>
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
             }).catch((e) => {
             console.log("ERROR IS: " + JSON.stringify(e));
             })
        }
}).catch((e) => {
    console.log("ERROR IS: " + JSON.stringify(e));
})
}} />
  <Button onPress={()=>{handlesignout}} title='Log out'/>
    </>
  )
}

export default Login
