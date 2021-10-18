import React, { useState } from 'react';
import {View,Text,Button,StyleSheet, TextInput} from 'react-native';
import { useDispatch } from 'react-redux';
import { postStockService, stocksService } from '../service/stocks';

const AddStockScreen = ({ navigation })=>{
  const [stockName, setStockName] = useState("");
  const [transcationType, setTranscationType] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("")


  const dispatch = useDispatch();

  const postData ={
    stockName: stockName,
    transcationType: transcationType,
    quantity: quantity,
    amount: amount,
    date: date
  }
  
  const submitHandler = (postData) =>{
    dispatch(postStockService(postData));
    dispatch(stocksService());
    setStockName("");
    setTranscationType("");
    setQuantity(0);
    setAmount(0);
    setDate("")
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
              placeholder="STOCK NAME"
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
              onPress={()=>submitHandler(postData)}
              style={styles.button}
              title="ADD STOCK"
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

export default AddStockScreen;