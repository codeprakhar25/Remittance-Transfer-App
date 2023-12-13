import React from 'react'
import { View,Text,TouchableOpacity } from 'react-native'

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Remit</Text>
      <Text>We provide money transfer from one country to the other at minimum possible rates cutting the middlemen.</Text>
<Text>You can do this in Seconds.</Text>
<TouchableOpacity onPress={()=>{navigation.navigate('transfer')}}>
    <Text>Transfer Money </Text>
</TouchableOpacity>

<Text>Recent Transfers</Text>
    </View>
  )
}

export default Home

