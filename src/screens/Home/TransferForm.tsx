import React from 'react'
import { View,Text,TouchableOpacity,TextInput, StyleSheet } from 'react-native'

const TransferForm = () => {
  return (
    <View>
    <Text>Add Details</Text>
    <TextInput
            // onChangeText={text => {
            //   setAddress(text);
            // }}
            // value={address}
            style={{
              width: '90%',
              borderWidth: 1.2,
              height: 55,
              borderColor: '#DFDFE6',
              borderRadius: 5,
              marginTop: 15,
              paddingLeft: 10,
              marginLeft:'5%',
              fontSize: 15,
              color: 'black',
              backgroundColor:"#FFFFFF"
            }}
            underlineColorAndroid="transparent"
            placeholder={'Enter Person to send Money'}
            placeholderTextColor="black"
            // placeholderFontSize="20"
            autoCapitalize="none"
          />
<Text>Choose Your Country</Text>

<Text>Send Money to</Text>
<Text>Rate</Text>
<TextInput
            //   onChangeText={text => {
            //     setUserName(text);
            //   }}
            //   value={username}
              editable={false}
              style={styles.inputprofdis}
              underlineColorAndroid="transparent"
              placeholder="Enter Country to know Rate"
              placeholderTextColor="grey"
            //   placeholderFontSize="20"
              autoCapitalize="none"
            />
              <TextInput
            //   onChangeText={text => {
            //     setAadhar(text);
            //   }}
            //   value={aadhaar}
              style={styles.inputprof}
              underlineColorAndroid="transparent"
              placeholder={"Enter Amount"}
              placeholderTextColor="grey"
            //   placeholderFontSize="20"
            keyboardType="numeric"
              autoCapitalize="none"
            />
<TouchableOpacity style={styles.signbutton}>
  <Text style={{color:"#ffffff"}}>Send the Amount </Text>
</TouchableOpacity>
  </View>
  )
}

export default TransferForm

const styles=StyleSheet.create({
    inputprofdis: {
        marginLeft: '5%',
        // marginTop:40,
        height: 66,
        // borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: 'lightgrey',
        borderColor: '#D8DADC',
    fontSize:16,
        // borderRadius: 10,
        width: '90%',
        padding: 15,
        marginBottom: 10,
      },
    
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
      },  inputprof: {
        marginLeft: '5%',
        // marginTop:40,
        height: 66,
        // borderColor: '#7a42f4',
        borderWidth: 1,
        backgroundColor: '#FFFFFF',
        borderColor: '#D8DADC',
        // borderRadius: 10,
        width: '90%',
        padding: 15,
        marginBottom: 10,
      },
})