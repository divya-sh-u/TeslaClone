import { View, Text,ImageBackground } from 'react-native';
import React from 'react';
import styles from './styles';
import StyledButton from '../StyledButton';
const CarItem = (props) => {
  return (
    
      <View style={styles.carContainer}>
        <ImageBackground style={styles.image} source={require('../../assets/Model3.jpeg')}/>
        <View style={styles.titles}>
          <Text style={styles.title}>Model G</Text>
          <Text style={styles.subtitle}>Starting at 69,000$</Text>
        </View>
        <StyledButton type='primary' content={'Custom Order'} onPress={()=>{
            console.warn('custom order button was pressed')
        }}/>
        <StyledButton type='secondary' content={'Existing Inventory'} onPress={()=>{
            console.warn('Existing Inventory button was pressed')
        }}/>
        
      </View>

    
  );
};
export default CarItem;
