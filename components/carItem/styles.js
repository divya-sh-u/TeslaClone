

import { StyleSheet,Dimensions } from "react-native-web";
const styles = StyleSheet.create({
    carContainer:{
        width:'100%',
        height: Dimensions.get('window').height,
    
      },
      titles:{
        marginTop:'30%',
        width:'100%',
        alignItems: 'center',
      },
      subtitle:{
        fontSize: 16,
        color: '#5c5e62'
      },
      title:{
        fontSize:40,
        fontWeight:'500',
      },
      image:{
        
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttonContainer:{
        postion:'absolute',
        bottom:-400,
        width:'100%',
      },
      subtitleCTA:{
        textDecorationLine:'underline',
      }
});
export default styles;