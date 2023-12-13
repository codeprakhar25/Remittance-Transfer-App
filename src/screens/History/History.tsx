import React,{useEffect} from 'react'
import { View,Text,ScrollView } from 'react-native'
import { useGetTransferbyUserIdQuery } from '../../app/api/apiSlice';
import Loading from '../../app/components/Loading';
import HistoryCard from '../../app/components/HistoryCard';
import Header from '../../app/components/Header';
const History = ({navigation,userinfo}) => {
  const id =userinfo;
  const { data:transfers, error,isSuccess, isLoading,refetch } = useGetTransferbyUserIdQuery(id);
  if (isSuccess) {
    // console.log(transfers);
    Array.from(transfers)
  } else if (isLoading) {
    return <Loading />;
  } else if (error) {
    return (
      <View>
        <Text>Error occurred: {error.message}</Text>
      </View>
    );
  }
  console.log(transfers)
  // useEffect(()=>{
  //   refetch();
  // },[])
  return (
    <View>
      <Header text="Transfer History"/>
     <Text style={{marginTop:15,marginLeft:20,fontSize:18,color:'#000000',fontWeight:600}}
    >Your Transfer History
    </Text> 
    <ScrollView>
    {transfers &&
        transfers.map((item) => {
          return <HistoryCard key={item.id} transfer={item}/>;
        })}
    </ScrollView>
    </View>
  )
}

export default History
