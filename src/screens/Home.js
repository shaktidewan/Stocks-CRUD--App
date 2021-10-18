import React, { useEffect, useState } from 'react';
import { Button, View, Text,StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteStockService, stocksService } from '../service/stocks';
import { Table, Row, Rows } from 'react-native-table-component';

const HomeScreen = ({ navigation })=>{
    const api = useSelector(state => state.stocks)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(stocksService())
    }, []);

    // console.log("STOCKS",api);

    const [tableHead, setTableHead] = useState([
        'Name',
        'Type',
        'QTY',
        'AMT',
        'Date',
        '',
        ''
    ])
    const tableData = api.map((post,key)=>
        [
            post.stockName,
            post.transcationType,
            post.quantity,
            post.amount,
            post.date,
            <Button title="X" onPress={()=>deleteHandler(post.id)}/>,
             <Button
            title="-"
            onPress={() => navigation.navigate('Edit Stock', {
            id: post.id,
            stock_Name: post.stockName,
            transcation_Type: post.transcationType,
            qty: post.quantity,
            amt: post.amount,
            DateTime: post.date,
          })}
        />
        ]
        )

    const deleteHandler = (id) =>{
        // console.log("DELETE ID:",id);
        dispatch(deleteStockService(id));
        dispatch(stocksService())
    }
    
    return(
        <View style={styles.container}>
        <Button
            title="ADD "
            onPress={() => navigation.navigate('Add Stock')}
        />
        <View>
        <Table borderStyle={{borderWidth: 2, borderColor: '#c8e1ff'}}>
          <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
          <Rows data={tableData} textStyle={styles.text}/>
          
        </Table>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 80, backgroundColor: '#f1f8ff' },
  });

export default HomeScreen;