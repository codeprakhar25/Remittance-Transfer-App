import React,{useState,useEffect} from 'react'
import { View,Text,TouchableOpacity } from 'react-native'
import { GoogleSignin } from 'react-native-google-signin';

const Home = ({navigation,userinfo}) => {
  console.log(userinfo)
 const userInfo=userinfo;
  return (
    <View>
      <Text>Remit</Text>
      <Text>We provide money transfer from one country to the other at minimum possible rates cutting the middlemen.</Text>
<Text>You can do this in Seconds.</Text>
<TouchableOpacity onPress={()=>navigation.navigate('transfer', {userId: userInfo})}>
    <Text>Transfer Money </Text>
</TouchableOpacity>

<Text>Recent Transfers</Text>
    </View>
  )
}

export default Home

