import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Overview from './Pages/Overview';
import Covid from './Pages/Api/Covid';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" options={{headerShown:false}} component={Home} />
        <Stack.Screen name="over" options={{headerShown:false}} component={Overview} />
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}

export default App;