import React from 'react';
import { registerRootComponent } from "expo";
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainFeed from "./screens/MainFeed";
import AddBook from "./screens/AddBook";
import { Ionicons } from '@expo/vector-icons';
import BookDetails from "./screens/BookDetails";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddNote from "./screens/AddNote";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={'MainFeed'} component={MainFeed} />
      <Stack.Screen name={'AddBook'} component={AddBook} />
      <Stack.Screen name={'BookDetails'} component={BookDetails} />
      <Stack.Screen name={'AddNote'} component={AddNote} />
    </Stack.Navigator>
  </NavigationContainer>
}

registerRootComponent(App);
export default App;
