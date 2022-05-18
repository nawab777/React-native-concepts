import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity,Pressable,Touchablewithoutfeedback} from 'react-native'
import React, { Component} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import { Venddormain } from './components/vendormain';



// import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Octicons from 'react-native-vector-icons/Octicons'
    
  export default function Notifications({navigation}){
   return(
    //  <ScrollView>  
        <Venddormain    followers='30k' rating='5.5' about='We Sell your feelings not goods ' ownername='Zigana care' image={require('../assets/data1.jpg')} image2={require('../assets/data7.jpg')} />
        
    // </ScrollView>
 
 

   )
   

  }
  const styles=StyleSheet.create({

    })