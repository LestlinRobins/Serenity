import React from "react"; 
import { Text, View, Button, TextInput, TouchableOpacity, ScrollView } from "react-native"; 
import { Feather } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { TransitionSpecs } from '@react-navigation/stack';

function DetailsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#1B0026' }}>
      <Text style={{color:'black'}}>Details!</Text>
    </View>
  );
}

function HomeScreen({ navigation }) {
  return (
		<View style={{height:'100%',paddingHorizontal:'5%', paddingTop: '13%',backgroundColor:'#1B0026' }}>
			<View style={{height:'8.5%'}}>
				<Text style={{fontFamily:'DMSans-Bold', color:'#EA82FF', fontSize:30}}>Messages</Text>
				<View style={{top:'30%'}}>
					<TextInput
							editable
							autoFocus
							disableFullscreenUI
							placeholder="Search..."
							placeholderTextColor={'#BB68CC'}
							maxLength={40}
							style={{paddingHorizontal:15,paddingVertical:10, backgroundColor:'#41005C', width:'100%', borderRadius:30, fontSize:18, fontFamily:'DMSans-Regular', color:'#EA82FF'}}
					/>
				</View>
			</View>
			<ScrollView style={{top:'10%', backgroundColor:'#1B0026', height:'90%', marginBottom:'20%', borderRadius:20}}>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}} onPress={() => navigation.navigate('Details')}>
					<Text style={{color:'#BB68CC'}}>Person 1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 2</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 3</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 4</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 5</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 6</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 7</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 8</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 9</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 10</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 11</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 12</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 13</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 14</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 15</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 16</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 17</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}}>
					<Text style={{color:'#BB68CC'}}>Person 18</Text>
				</TouchableOpacity>
			</ScrollView>
		</View>
  );
}
const HomeStack = createStackNavigator();

const Profile = () => { 
    return (
      <HomeStack.Navigator 
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'tomato' },
        title:false,
        headerShown:false,
      }}
      >
        <HomeStack.Screen name="Home" component={HomeScreen} options={{animationEnabled:false}}/>
        <HomeStack.Screen name="Details" component={DetailsScreen} options={{animationEnabled:false}}/>
      </HomeStack.Navigator>
    );  
}; 

export default Profile; 
