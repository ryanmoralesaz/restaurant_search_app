import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.viewStyle}>
            <Ionicons name="search" style={styles.icon}  />
            <TextInput style={styles.inputStyle}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="search"
            value={term}
            onChangeText={onTermChange}
            onEndEditing={onTermSubmit}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: 'lightgrey',
        height: 40,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10
        
    },
    inputStyle: {
        fontSize: 18,
        flex: 1,
        margin: 2,
    },
    icon: {
        alignSelf: 'center',
        fontSize: 35,
        marginHorizontal: 10,
    }
   
});

export default SearchBar;