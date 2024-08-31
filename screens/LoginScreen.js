import React from "react"; 
import { Text, View, TouchableOpacity } from "react-native"; 
import { StatusBar } from 'expo-status-bar';
import * as Haptics from 'expo-haptics';

const LoginScreen = () => { 
  return ( 
    <View style={{ flex: 1, paddingHorizontal:'5%',paddingTop:'13%', backgroundColor:'#0C1321'}}> 
      <StatusBar style='light' />
      <View>
        <Text style={{ color: "gray", fontSize: 30, fontFamily:'DMSans-Regular' }}>Hello, there! Let's get this party started!</Text> 
      </View>
      <View>
        <TouchableOpacity 
        activeOpacity={0.7}
        onPress = { ()=> { 
          Haptics.selectionAsync()
      } }
        style={{backgroundColor:'#253863', width:'80%', alignSelf:'center', height:'25%', borderRadius:30, padding:'3%'}}>
          <Text style={{fontFamily:'DMSans-Medium', color:'#fff', fontSize:18}}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View> 
  ); 
}; 

export default LoginScreen; 

    