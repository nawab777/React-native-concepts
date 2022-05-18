import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import { useState,useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity,Pressable} from 'react-native'
export const About=(props)=>{
      
    return(
    
     <View  style={{backgroundColor:'white',flex:1,elevation:1,borderRadius:3,margin:8}}> 
       <View style={styles.showview}>
        <Text >Rana Isharib Khan  hsadf jssddfhj vvjshsbv asdaisudfbbf jsdhbvfs jisahbbisub sdbvfuis jsdbvfiasdfbs jiasudbviad isudbiusosdfus isudvbus jsdhuvbsvibdv isvbsv isviu</Text>

      <Image source={props.image3} style={{resizeMode:'center',flex:1,alignSelf:'center',borderRadius:10}} ></Image>    

    </View>
    </View>
    )


}
const styles=StyleSheet.create({
   
    showview:{
   flex:1,
   padding:10
    }})