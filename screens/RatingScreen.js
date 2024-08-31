
import React from "react"; 
import { Text, View } from "react-native"; 
import { Feather } from '@expo/vector-icons';

const Onboard = () => { 
  return ( 
    <View>
      <View style={{alignItems:'center', top:200}}>
        <Image style={{width:100, height:100}} source={require('./assets/Images/logo.png')}/>
        <Text style={{fontFamily:'DMSans-SemiBold', fontSize:28, color:'#5d85a6', top: 40}}>ClapUrHands</Text>
      </View>
      <View style={{alignItems:'center', marginBottom:20}}>
        <Text style={{fontFamily:'DMSans-Regular',fontSize:14,color:'#476680'}}>from</Text>
        <Text style={{fontFamily:'DMSans-Medium',fontSize:20,color:'#469C9C'}}>Signum</Text>
      </View>
    </View>
  ); 
}; 
    
    export default Onboard; 
    
