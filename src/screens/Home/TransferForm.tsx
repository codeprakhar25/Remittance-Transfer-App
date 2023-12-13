import React, { useEffect,useState } from 'react'
import { View,Text,TouchableOpacity,TextInput, StyleSheet,Alert,ScrollView, Image } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import { countryData } from './countrydata';
import { useAddTransferMutation } from '../../app/api/apiSlice';
import Header from '../../app/components/Header';

const TransferForm = ({route,navigation}) => {
  const {userId} = route.params;
  console.log(userId);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [transferCountry, setTransferCountry] = useState('');
  const [personTo,setPersonTo]=useState("");
 const [sentAmount,setSentAmount]=useState(0);
 const [rate,setRate]=useState(0)
 const [receivingAmount,setReceivingAmount]=useState(0);

const getConversionRate=async()=>{
  try{
    const res = await fetch(`https://v6.exchangerate-api.com/v6/acb4c067eef5b97e57ac2447/pair/${selectedCountry}/${transferCountry}`);

    const data=await res.json();
    setRate(data.conversion_rate);
    console.log(data);
  }catch(error){
    console.log("error",error);
  }
}
  useEffect(()=>{
    if(selectedCountry.length>1 && transferCountry.length>1){
      getConversionRate();
    }
  },[selectedCountry,transferCountry])
  useEffect(()=>{
    setReceivingAmount(rate*sentAmount);
  },[sentAmount,rate])
console.log(sentAmount)

const [Transfer]=useAddTransferMutation();
const handleClick= async()=>{
  if(sentAmount && receivingAmount && personTo && userId){
    try{
    const response= await Transfer({
      sent_amount:sentAmount,
      received_amount: receivingAmount,
      to:personTo,
      rate: rate,
      user_id:userId,
      completed:true,
    
    })
    console.log(response);
          Alert.alert("Transfer Successfull");
          navigation.navigate('History');
    }catch(error){
      console.log(error)
    }
  }else{
    Alert.alert("Enter Correct Information")
  }
}

  return (
    <ScrollView>
      <View>
        <Header text='Transfer Money' />
        <TouchableOpacity
          onPress={() => {
              navigation.navigate('Home');        
          }}
          style={{position: 'absolute'}}>
          <Image
            style={{position: 'absolute', top: 22, left: 12}}
            source={require('../../app/assets/Back.png')}
          />
        </TouchableOpacity>
      </View>
    <Text style={{marginLeft:20,marginTop:15,fontSize:16,color:'black'}}>Add Details</Text>
    <TextInput
            onChangeText={text => {
              setPersonTo(text);
            }}
            value={personTo}
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
            placeholder={'Enter Persons Name to send Money'}
            placeholderTextColor="black"
            // placeholderFontSize="20"
            autoCapitalize="none"
          />
<Text style={{marginLeft:20,marginTop:15,fontSize:16,color:'black'}}>Choose Your Country</Text>
<View
              style={{
                width: '90%',
                marginLeft: '5%',
                height: 65,
                borderRadius: 7,
                borderWidth: 1.2,
                backgroundColor: '#ffffff',
                // alignItems:'center',
                borderColor: '#DFDFE6',
                marginTop: 15,
                // fontSize: 8,
              }}>
<Picker
        selectedValue={selectedCountry}
        style={{ marginTop:5, }}
        onValueChange={(itemValue) => setSelectedCountry(itemValue)}
      >
        {countryData.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
      </View>
<Text style={{marginLeft:20,marginTop:15,fontSize:16,color:'black'}}>Send Money to</Text>
<View
              style={{
                width: '90%',
                marginLeft: '5%',
                height: 65,
                borderRadius: 7,
                borderWidth: 1.2,
                backgroundColor: '#ffffff',
                borderColor: '#DFDFE6',
                marginTop: 15,
                // fontSize: 8,
              }}>
<Picker
        selectedValue={transferCountry}
        style={{ marginTop:5, }}
        onValueChange={(itemValue) => setTransferCountry(itemValue)}
      >
        {countryData.map((item, index) => (
          <Picker.Item key={index} label={item.label} value={item.value} />
        ))}
      </Picker>
      </View>
<Text style={{marginLeft:20,marginTop:15,fontSize:16,color:'black'}}>Rate</Text>
{
  rate==0 ?
  <Text style={styles.inputprofdis}>Enter Country to know the rate</Text>
  :
<Text style={styles.inputprofdis}>{rate}</Text>
}
<Text style={{marginLeft:20,marginTop:15,fontSize:16,color:'black'}}>Amount to Send in {selectedCountry}</Text>
              <TextInput
              onChangeText={num => {
                setSentAmount(num);
              }}
              value={sentAmount}
              style={styles.inputprof}
              underlineColorAndroid="transparent"
              placeholder={"Enter Amount"}
              placeholderTextColor="grey"
            //   placeholderFontSize="20"
            keyboardType="numeric"
              autoCapitalize="none"
            />
            {
  receivingAmount==0 ?
  <Text style={styles.inputprofdis}>Amount to be Received</Text>
  :
  <>
<Text style={{marginLeft:20,marginTop:15,fontSize:16,color:'black'}}>Amount to Receive in {transferCountry}</Text>
<Text style={styles.inputprofdis}>{receivingAmount}</Text>
  </>
}
<TouchableOpacity style={styles.signbutton} onPress={()=>{handleClick()}}>
  <Text style={{color:"#ffffff",fontSize:18,fontWeight:"600"}}>Send the Amount </Text>
</TouchableOpacity>
  </ScrollView>
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
        padding: 20,
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