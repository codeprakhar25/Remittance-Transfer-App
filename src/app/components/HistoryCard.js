import React from 'react'
import { View,Text,StyleSheet } from 'react-native'


const HistoryCard = ({transfer}) => {
  console.log(transfer)
  return (
    <>
    <View style={styles.cardContainer}>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',}}>
       <Text style={styles.text}>Transfer ID: {transfer.id}</Text>
       <Text style={styles.text}>Sent to: {transfer.to}</Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',}}>
       <Text style={styles.text}>Sent Amount: {transfer.sent_amount}</Text>
       <Text style={styles.text}>Received Amount: {transfer.received_amount}</Text>
      </View>

       <Text style={styles.text}>Transfer Date: {transfer.createdAt?.split('T')[0]}</Text>
       <Text style={styles.text}>Transaction completed: {transfer.completed ? "Yes" :"No"}</Text>
       <Text style={styles.text}>Any Issues with it: {transfer.issue ? "Yes" :"No"}</Text>
    </View>
    </>
  )
}

export default HistoryCard
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    padding: 16,
    margin: 8,
    marginTop:15,
    borderRadius: 8,
    elevation: 3,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

