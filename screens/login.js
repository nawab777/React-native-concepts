import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity, ToastAndroid, Alert} from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import Tabbar from './tabnavigation';
import Drawertab from './tabnavigation';
import PushNotification from "react-native-push-notification";

export default function Login( {navigation} ){
  const [username,setusername]=useState('');
  const [password,setpassword]=useState('');
 const verifycredentials =()=>{
  // let user='isharibrana7@gmail.com'
  //   let pass='12345Asd&'
  //  if(user==username && pass==password){
    
    
navigation.navigate('Drawertab')

//      } else if(!username && !password){
//    ToastAndroid.show('please enter email/password',ToastAndroid.LONG)
//  }else if(username!==user || password!==pass){
//    ToastAndroid.show('invalid Email or Password',ToastAndroid.LONG)
//  }


}
 const createchannel=()=>{
    PushNotification.createChannel({
     channelId:'admin',
     channelName:'Admin'

    })

 }
 

    return(
      
        <SafeAreaView style={{backgroundColor:'white',flex:1}}>
      
      
        <View  style={styles.container1}>

<Image source={require('../assets/main.jpg')} style={styles.icon1}   /> 
 
</View>
<View style={styles.container2}>
  
<Text style={{alignSelf:'center',color:'black',fontStyle:'normal',fontSize:20}}>Login
</Text>
<TextInput style={styles.input} placeholder='Enter Username' onChangeText={username=>setusername(username)} ></TextInput>

<TextInput style={styles.input} placeholder='Enter password' onChangeText={password=>setpassword(password)}></TextInput>
<View style={styles.button}>
<Button title='Login' color='#841584' onPress={verifycredentials} ></Button>
{/* <Button title='go to supa' onPress={gosupa} /> */}
</View>
</View  >       
</SafeAreaView>
 

    )


}
const styles = StyleSheet.create({

    container1:{
    
    backgroundColor:'white',
    justifyContent:'space-evenly',
    alignSelf:'center',
    flex:0.7
    
    
    },
    button:{
    margin:26,
    width:90,
    alignSelf:'center'
    } ,
    container2:{
    marginTop:15,
    
    
    padding:20
    
    
    
    },icon1:{
      
    resizeMode:'center',
    height:220,
    marginTop:15,
    borderRadius:400,
    
    
    
    },input:{
    backgroundColor:'white',
    margin:10,
    padding:8,
    borderBottomColor:'black',
    borderBottomWidth:1
    }
    
      })