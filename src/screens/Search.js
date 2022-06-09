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
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const Stack = createStackNavigator();

const Search = ({}) => {
  
  const isDarkMode = useColorScheme() === 'dark';
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
      // price === $ || $$ || $$$
      return results.filter(result => {
          return result.price === price;
      })
  };
  return (
    <>
      <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            
            <ScrollView>
            <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            <ResultsList results={filterResultsByPrice('$$$$')} title="Treat Yourself" />
            </ScrollView>
      
    
    </>
    
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

export default Search;