import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity,ToastAndroid} from 'react-native'
import React, { Component } from 'react'
import {getlatitude,getlongitude} from '../redux/action'
import { useSelector,useDispatch } from 'react-redux'
import MapView from 'react-native-maps';
import { TOUCHABLE_STATE } from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

export default function Profile({navigation}){
const{lat,long}=useSelector(state=>state.reducer);
const disp=useDispatch();
const mapref=React.createRef();
let targetlatiude;
let targetlongitude;
const displaymap=()=>{
          mapref.current.animateToRegion({
          latitude: lat,
          longitude:long,
          latitudeDelta: 0.11,
          longitudeDelta: 0.11
        })
        console.log('returned',displaymap)
        
      
      
     

}

return(
    <View style={{flex:1, backgroundColor:'white'}} >
    <View style={{backgroundColor:'white',height:120,alignItems:'center',justifyContent:'center'}}>    
    <Text style={{fontSize:30}}>Find your place</Text>
    </View>
    <TextInput style={{backgroundColor:'white',margin:10,borderColor:'black',borderBottomWidth:2}} placeholder='Enter latitude' onChangeText={(lati)=>{   let latu=Number(lati);   disp(getlatitude(latu));}}></TextInput>
    <TextInput style={{backgroundColor:'white',marginTop:10,margin:10,borderBottomWidth:2}} placeholder='Enter longitude' onChangeText={(longi)=>{  let longu=Number(longi);  disp(getlongitude(longu));}}></TextInput>

    <TouchableOpacity style={{backgroundColor:'gray',width:70,alignSelf:'center',borderWidth:1,borderRadius:10}}    onPress={()=>displaymap()}><Text style={{fontSize:20,alignSelf:'center'}}>Find</Text></TouchableOpacity>
    <View style={styles.mapbody}>
        
         
    <MapView  style={styles.mapconatiner}   ref={mapref}  initialRegion={{
     latitude:lat,
     longitude: long,
     latitudeDelta: 0.1,
     longitudeDelta: 0.1,
   }} 
   />
  
   </View>
    
    
  
    </View>
)}
const styles=StyleSheet.create({
    mapconatiner:{
    
          flex:1

            

             
             
      },
      mapbody:{
               backgroundColor:'gray',
               height:400,
               justifyContent:'center',
               alignContent:'center',
               marginTop:10
               

               


      }






})