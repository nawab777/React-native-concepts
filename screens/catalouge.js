import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity} from 'react-native'
import React, { Component, useEffect } from 'react'
import { Getcities } from '../redux/action'
import {useDispatch,useSelector} from 'react-redux'
import { showplaces } from '../redux/action'
import { FlatList } from 'react-native-gesture-handler'
import PushNotification from "react-native-push-notification";

  

export default function Catalouge({navigation}){
    const {places}=useSelector(state=>state.reducer);
    const dispatch=useDispatch();
    useEffect(()=>{
        // const URL='https://mocki.io/v1/6e710ba6-ec99-40b4-8e2c-95da3e6b3699';
        const unsubscribe = navigation.addListener('focus', () => {
            // The screen is focused
            // Call any action
            dispatch(showplaces());
          });
          return unsubscribe;


        
    },[]);

    // async function showPlace(URL){
    // const result=await fetch(URL,{ method:'GET',headers:{ 'Content-type':'application/json'} })
    // .then((response) => response.json())
    // .then((json)=>{
    //     console.log('json response', json)
    // })
    
    // }
    const handlenotification=(item)=>{
      PushNotification.localNotification({
              channelId:'admin',
              title:'i clicked on '  +item.City,
              message:'place for visit in '+item.City +' is ' + item.place ,
            //   picture: '../assets/main.jpg'
              picture:"https://en.wikipedia.org/wiki/Sultan_Bahu#/media/File:Bahu_Sultan.jpg"
            
                
              })
              

    }

    
        return(

         <View>
         <Text style={{fontSize:30,alignSelf:'center',marginBottom:20}}>catalouge Screen</Text>
         <FlatList
         data={places} 
         renderItem={({item})=>( 
        <View style={{alignItems:'center',padding:30}}>
            <TouchableOpacity onPress={()=>handlenotification(item)} style={{width:300,height:70,backgroundColor:'gray',justifyContent:'center'}} >
                <Text style={{fontSize:20,alignSelf:'center'}}>{item.City}</Text>
                </TouchableOpacity>
        </View>

         )}
         
         
         />
</View>
    )
}