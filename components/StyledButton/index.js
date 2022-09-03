import React from "react";
import {View,Text,Pressable} from 'react-native';
import styles from "./style";
const StyledButton = (props) => {
    // const type=props.type;
    // const content=props.content;
    // const onPress=props.onPress;
    const {type,content,onPress}= props;
    const backgroundColor =type === 'primary' ? '#3E4146' : '#E7E7E7';
    const textColor =type === 'primary' ? 'white' : 'black';
    
    
    return (

        <View style={styles.container}>
        <Pressable 
        style={[styles.button,{backgroundColor:backgroundColor}] }
        
        onPress={() => onPress()}>
            <Text  style={[styles.text,{color:textColor}]}>{content}</Text>
            </Pressable>
        </View>
    
  );
};
export default StyledButton;