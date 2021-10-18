import React, { useState } from 'react';
import {View,Text,Button,StyleSheet, TextInput} from 'react-native';
import { useDispatch } from 'react-redux';
import { stocksService, updateStockService } from '../service/stocks';

const EditScreen = ({ route,navigation })=>{
    const { id,stock_Name,transcation_Type,qty,amt,DateTime } = route.params;

  const [stockName, setStockName] = useState(stock_Name);
  const [transcationType, setTranscationType] = useState(transcation_Type);
  const [quantity, setQuantity] = useState(qty);
  const [amount, setAmount] = useState(amt);
  const [date, setDate] = useState(DateTime)


  const dispatch = useDispatch();

  const postData ={
    stockName: stockName,
    transcationType: transcationType,
    quantity: quantity,
    amount: amount,
    date: date
  }
  
  const submitHandler = (postData,id) =>{
    dispatch(updateStockService(postData,id));
    dispatch(stocksService())
  }
    return(
      <View style={[styles.container, {
            flexDirection: "column"
      }]}>
          <View style={{ flex: 1,}}>
            <Text>ADD STOCK</Text>
            <TextInput
              style={styles.input}
              onChangeText={setStockName}
              placeholder="Stock Name"
              value={stockName}
            />  
            <TextInput
              style={styles.input}
              onChangeText={setTranscationType}
              placeholder="TRANS TYPE"
              value={transcationType}
            />  
             <TextInput
              style={styles.input}
              onChangeText={setQuantity}
              placeholder="Quantity"
              value={quantity}
            />
            <TextInput
              style={styles.input}
              onChangeText={setAmount}
              placeholder="Amount"
              value={amount}
            />
            <TextInput
              style={styles.input}
              onChangeText={setDate}
              placeholder="Date"
              value={date}
            />  
            <Button
              onPress={()=>submitHandler(postData,id)}
              style={styles.button}
              title="UPDATE STOCK"
            />
          </View>
          <View style={{ flex: 2, }}> 
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
      height: 40,
      margin: 8,
      borderWidth: 1,
      padding: 10,
    },
    button: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 6
  }
});

export default EditScreen;
