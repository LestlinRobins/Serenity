import React, {useState, useEffect} from "react"; 
import { Text, View, TextInput, ScrollView, TouchableOpacity, Modal, Pressable, StatusBar, SafeAreaView, Platform } from "react-native"; 
import SystemNavigationBar from 'react-native-system-navigation-bar';

const Chats = () => { 
	const [modalVisible, setModalVisible] = useState(false);
	return ( 
		<View style={{height:'100%',paddingHorizontal:'5%', paddingTop: '13%',backgroundColor:'#1B0026' }}>
			<Modal animationType="slide" transparent={true} visible={modalVisible} statusBarTranslucent={true} onRequestClose={() => {setModalVisible(!modalVisible)}}>
			<StatusBar style='light'/>
				<View style={{height:'100%', backgroundColor:'#1B0026', margin:0}}>
					<View style={{}}>
						<Text style={{}}>Hello World!</Text>
						<Pressable
						onPress={() => setModalVisible(false)}>
						<Text style={{}}>Hide Modal</Text>
						</Pressable>
					</View>
			  </View>
			</Modal>
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
				<TouchableOpacity style={{backgroundColor:'#300045', padding:'5%', width:'100%', marginBottom:'2%', borderRadius:10}} onPress={() => setModalVisible(!modalVisible)}>
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
	}; 
export default Chats; 
