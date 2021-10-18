import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import AddStockScreen from "../screens/AddStock";
import EditScreen from '../screens/Edit';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Add Stock" component={AddStockScreen} />
        <Stack.Screen name="Edit Stock" component={EditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;