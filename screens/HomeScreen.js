import React from "react"; 
import { Text, View, Image } from "react-native"; 
import LottieView from "lottie-react-native";

const Home = () => { 
  return ( 
    <View style={{ flex: 1, backgroundColor:'#1B0026'}}> 
      <View style={{backgroundColor:'#3D0052', justifyContent:'space-between',height:'16%', paddingHorizontal:'5%', borderBottomLeftRadius:20, borderBottomRightRadius:20, shadowColor:'black',shadowOpacity: 0.28,shadowRadius: 10.0,elevation:14, flexDirection:'row', paddingTop:'12%'}}>
        <Text style={{fontFamily:'Satoshi-Bold', color:'#EA82FF', fontSize:30, width:190}}>ClapUrHands</Text>
        <Image style={{height:40, width:40, borderRadius:100, top:'1%'}} source={require('../assets/Images/avatar.png')}/>
      </View>
      <View style={{paddingHorizontal:'5%', paddingTop: '5%', flex:1}}>
        <View style={{height:'10%', marginBottom:'2%'}}>
          <Text style={{fontFamily:'DMSans-Bold', color:'#EA82FF', fontSize:27}}>Good evening, Lestlin!</Text>
        </View>
        <View style={{flexDirection:'row', height:'40%', justifyContent:'space-between'}}>
          <View style={{backgroundColor:'#41005C', width:'48%', height:'50%', borderRadius:15, paddingHorizontal:8, alignItems:'center', paddingTop:'4%'}}>
            <Text style={{fontFamily:'DMSans-SemiBold', color:'#D778EB', fontSize:15}}>Week Average</Text>
            <Text style={{fontFamily:'DMSans-Black', color:'#F599FF', fontSize:32, paddingTop:'3%'}}>★ 3.89</Text>
            <Text style={{fontFamily:'DMSans-Medium', color:'#BB68CC', fontSize:10.5}}>(Up by 12%)</Text>
          </View>
          <View style={{backgroundColor:'#41005C', width:'48%', height:'50%', borderRadius:15, paddingHorizontal:8, alignItems:'center', paddingTop:'4%'}}>
            <Text style={{fontFamily:'DMSans-SemiBold', color:'#D778EB', fontSize:15}}>Today's Score</Text>
            <Text style={{fontFamily:'DMSans-Black', color:'#F599FF', fontSize:32, paddingTop:'3%'}}>78%</Text>
            <Text style={{fontFamily:'DMSans-Medium', color:'#BB68CC', fontSize:10.5}}>(Up by 36%)</Text>
          </View>
        </View>
        <LottieView
        autoPlay
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#1B0026',
        }}
        source={require('../assets/Animations/Animation5.json')}
      />
      </View>
    </View> 
  ); 
}; 
  
export default Home; 