import { StyleSheet, View } from 'react-native';
import Carlist from './components/Carlist';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Header from './components/Header';
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <Carlist/>
      <StatusBar style='auto'/>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
