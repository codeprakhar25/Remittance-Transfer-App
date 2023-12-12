import React from 'react'
import { StyleSheet, Text, View, Pressable ,TextInput,Alert} from 'react-native';
import ScreenWrapper from './ScreenWrapper';

const Header = (props) => {
  return (

          <View style={styles.commonheader}>
        <Text style={styles.headertext}> {props.text} </Text>
      </View>
  )
}


export default Header

const styles = StyleSheet.create({
    commonheader:{
        backgroundColor:'#FFFFFF',
      width:'100%',
      height:60,
      },
      headertext:{
        fontFamily: 'Quicksand',
        fontStyle: "normal",
        fontWeight: 700,
        fontSize: 18,
      margin:8,
      marginTop:18,
      marginLeft:30,
      color: "#2E2E2E",
      },
})