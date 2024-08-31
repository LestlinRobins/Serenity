import React from "react"; 
import { Text, View, TextInput, KeyboardAvoidingView, Platform, ScrollView } from "react-native"; 

const Search = () => { 
	return ( 
		<View style={{height:'100%',paddingHorizontal:'5%', paddingTop: '13%',backgroundColor:'#1B0026' }}>
			<View style={{height:'8.5%'}}>
				<Text style={{fontFamily:'DMSans-Bold', color:'#EA82FF', fontSize:30}}>Search</Text>
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
		</View>
	); 
}; 

export default Search; 
