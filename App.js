import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useRef } from 'react';
import {
  Dimensions, 
  SafeAreaView,
  ScrollView,
  StyleSheet, 
  useColorScheme, 
  Animated,
  LayoutAnimation,
  View, 
  Text,
  Button,
  TouchableOpacity,
  LogBox
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Search from './src/screens/Search';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
const Stack = createStackNavigator();

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  const ref = React.useRef(null);

  return (
  
      <NavigationContainer ref={ref}>
        <Stack.Navigator initialRouteName="Search Screen">
          <Stack.Screen name="Search Screen" component={Search} title="Search Screen" />
          <Stack.Screen name="Results Show" component={ResultsShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white', //isDarkMode ? Colors.darker : Colors.lighter,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
