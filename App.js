import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'expo-dev-client';
import React, { Component } from "react";
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/HomeScreen';
import Profile from './screens/ProfileScreen'
import Search from './screens/SearchScreen'
import Chats from './screens/ChatScreen';
import Explore from './screens/ExploreScreen';
import LoginScreen from './screens/LoginScreen';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'DMSans-Thin': require('./assets/Fonts/DM_Sans/static/DMSans-Thin.ttf'),
    'DMSans-ExtraLight': require('./assets/Fonts/DM_Sans/static/DMSans-ExtraLight.ttf'),
    'DMSans-Light': require('./assets/Fonts/DM_Sans/static/DMSans-Light.ttf'),
    'DMSans-Regular': require('./assets/Fonts/DM_Sans/static/DMSans-Regular.ttf'),
    'DMSans-Medium': require('./assets/Fonts/DM_Sans/static/DMSans-Medium.ttf'),
    'DMSans-Bold': require('./assets/Fonts/DM_Sans/static/DMSans-Bold.ttf'),
    'DMSans-SemiBold': require('./assets/Fonts/DM_Sans/static/DMSans-SemiBold.ttf'),
    'DMSans-ExtraBold': require('./assets/Fonts/DM_Sans/static/DMSans-ExtraBold.ttf'),
    'DMSans-Black': require('./assets/Fonts/DM_Sans/static/DMSans-Black.ttf'),
    'Satoshi-Light': require('./assets/Fonts/Satoshi/Satoshi-Light.otf'),
    'Satoshi-Regular': require('./assets/Fonts/Satoshi/Satoshi-Regular.otf'),
    'Satoshi-Medium': require('./assets/Fonts/Satoshi/Satoshi-Medium.otf'),
    'Satoshi-Bold': require('./assets/Fonts/Satoshi/Satoshi-Bold.otf'),
    'Satoshi-Black': require('./assets/Fonts/Satoshi/Satoshi-Black.otf'),
  })
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let icon;
            let iconColor;
            if (route.name === 'Home') {
              icon='home'
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
              iconColor = focused
                ? '#FF70FF'
                : '#D4BDCF'
            } else if (route.name === 'Search') {
              icon = 'search'
              iconName = focused 
                ? 'ios-list'
                : 'ios-list-outline';
              iconColor = focused
                ? '#FF70FF'
                : '#D4BDCF'
            } else if (route.name === 'Explore') {
              icon = 'compass'
              iconName = focused 
                ? 'ios-list'
                : 'ios-list-outline';
              iconColor = focused
                ? '#FF70FF'
                : '#D4BDCF'
            } else if (route.name === 'Chats') {
              icon = 'message-circle'
              iconName = focused 
                ? 'ios-list'
                : 'ios-list-outline';
              iconColor = focused
                ? '#FF70FF'
                : '#D4BDCF'
            } else if (route.name === 'Profile') {
              icon = 'user'
              iconName = focused 
                ? 'ios-list'
                : 'ios-list-outline';
              iconColor = focused
                ? '#FF70FF'
                : '#D4BDCF'
            }
            return focused ? <View style={{backgroundColor:'#5A0082', width:'85%', alignItems:'center', height:'75%', borderRadius:20, justifyContent:'center', elevation:20, shadowColor:'black', shadowOpacity:1,shadowRadius:20}}>
              <Feather name={icon} size={25} color={iconColor} />
            </View> :  <View style={{backgroundColor:'#3D0052', width:'85%', alignItems:'center', height:'75%', borderRadius:20, justifyContent:'center'}}>
              <Feather name={icon} size={25} color={iconColor} />
            </View>           
          },
          tabBarActiveTintColor: '#FF70FF',
          tabBarInactiveTintColor: '#D4BDCF',
          tabBarStyle:{
            backgroundColor:'#3D0052',
            height: '9%',
            paddingBottom:10,
            borderTopWidth:0,
            shadowColor:'black',
            shadowOpacity: 0.28,
            shadowRadius: 10.0,
            elevation: 14,
            paddingTop:10,
            paddingHorizontal:7,
            borderTopLeftRadius:20,
            borderTopRightRadius:20
          },
          tabBarLabelStyle:{
            fontFamily:'DMSans-Regular',
            fontSize:11.5 
          },
          headerShown:false,
          tabBarHideOnKeyboard:true,
          tabBarShowLabel:false,
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Explore" component={Explore} />
        <Tab.Screen name="Chats" component={Chats} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor:'#1B0026',
    height:'100%',
    justifyContent:'space-between',
  },
});

