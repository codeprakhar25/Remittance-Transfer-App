import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Header from '../../app/components/Header';
const Home = ({ navigation, userinfo }) => {
  const id= userinfo
console.log(id)
  return (
    <>
    <Header text='Home'/>
    <View style={styles.container}>
      <Text style={styles.title}>Remit</Text>
      <Image
      style={{height:200,width:"90%",margin:'4.7%',marginBottom:15}}
      source={require('../../app/assets/banner.png')}
      />
      <Text style={styles.description}>
        We provide money transfer from one country to the other at minimum possible rates
        cutting the extra cost.
      </Text>
      {/* <Text style={styles.description}>You can do this in seconds.</Text> */}

      <TouchableOpacity style={styles.transferButton} onPress={()=>navigation.navigate('transfer', {userId: userinfo})}>
        <Text style={styles.transferButtonText}>Transfer Money</Text>
      </TouchableOpacity >
 
 <TouchableOpacity onPress={()=>{navigation.navigate('History')}}>
 <Text style={styles.recentTransfers}> Go to Recent Transfers</Text>
  </TouchableOpacity>    

    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:10,
    paddingTop:25,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    marginBottom: 16,
    marginTop:10,
  },
  transferButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  transferButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  recentTransfers: {
    fontSize: 20,
    marginTop:10,
    fontWeight: 'bold',
    marginBottom: 8,
    textDecorationLine:'underline',
    color:'green'
  },
});

export default Home;
