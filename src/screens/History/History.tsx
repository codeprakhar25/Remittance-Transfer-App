import React from 'react'
import { View,Text } from 'react-native'
import { useGetTransferbyUserIdQuery } from '../../app/api/apiSlice';
import Loading from '../../app/components/Loading';
import HistoryCard from '../../app/components/HistoryCard';

const History = ({navigation,userinfo}) => {
  const id =userinfo;
  const { data:transfers, error,isSuccess, isLoading } = useGetTransferbyUserIdQuery(id);
  if (isSuccess) {
    // console.log(transfers);
    Array.from(transfers)
  } else if (isLoading) {
    return <Loading />;
  } else if (error) {
    // Handle error state if needed
    return (
      <View>
        <Text>Error occurred: {error.message}</Text>
      </View>
    );
  }
  console.log(transfers)
  return (
    <View>
     <Text
    >History
    </Text> 
    {transfers &&
        transfers.map((item) => {
          return <HistoryCard key={item.id} transfer={item}/>;
        })}
    </View>
  )
}

export default History
