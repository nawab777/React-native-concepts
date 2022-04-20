import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';
import Octicons from 'react-native-vector-icons/Octicons'
  export default function Notifications({navigation}){
   return(


    <View style={styles.Container}>
      <View style={styles.coverphoto}>
     

      </View>
      {/* lower portion under user  coverphoto */}
      <View style={styles.lowerportion}>
        {/* whole box under lower portion */}
     <View style={styles.profileinfo}> 
     {/* profile dp here below */}
       <View style={styles.profileimage}>
         <Image source={require('../assets/data4.jpg')}  style={{resizeMode:"stretch",width:wp(19),height:hp(9)}}/>

       </View>
       {/* //about profile  */}
       <View style={styles.profiletext}>
         <Text style={{fontSize:20,alignSelf:'center',marginTop:4,fontWeight:'bold',color:'black'}}>Eco Dog Care</Text>
         <View style={styles.rating}>  
          <Entypo name='users' size={15} color='orange' />
          <Text style={{marginLeft:4,marginRight:4}}>20k  |</Text>
          <Entypo name='star' size={15} color='orange'/>
          <Text>4.5 rating</Text> 
           </View>
           <Text style={{alignSelf:'center',marginTop:9}}> Our main aim is to provide quality that you love ,love ,love.we have many more to present </Text>
           <View style={styles.mainbuttons}>

        <TouchableOpacity  style={styles.like}><AntDesign name='like2' size={15} color='white'/><Text style={{color:'white',marginLeft:4}}>like</Text></TouchableOpacity>
        <TouchableOpacity  style={[styles.like,styles.like2]}><Octicons name='report' size={15} color='#1e90ff'/><Text style={{color:'#1e90ff',marginLeft:4}}>Report</Text></TouchableOpacity>
           </View>
         </View>
     
    </View>
     </View>

    </View>
   
   )
   

  }
  const styles=StyleSheet.create({
    Container:{
     height:hp(50),
     width:wp(100),
     backgroundColor:"brown"

    },
    coverphoto:{
       flex:0.8
  
    },like:{
      backgroundColor:'#1e90ff',
      width:wp(35),
      height:hp(4),
      borderRadius:8,
    flexDirection:'row',
    justifyContent:'center'
    ,alignItems:'center',marginLeft:10
      
    },like2:{
      backgroundColor:'white',
      borderColor:'#1e90ff',
      borderWidth:1
    }
    ,
    lowerportion:{
      flex:1,
      backgroundColor:'white'
    },
    profileinfo:{
    height:hp(27),
    width:wp(90),
    backgroundColor:'white',
    alignSelf:'center',
    marginTop:-50,
    borderRadius:21,
  
  elevation:2
  
     },
     profileimage:{
    height:hp(9),
    width:wp(19),
    backgroundColor:'gray',
    alignSelf:'center',
    marginTop:-32,
    borderRadius:9,
    


     },
     profiletext:{
      flexDirection:'column',


     },
     rating:{
       flexDirection:'row'
      ,alignItems:'center',
      justifyContent:'center',
      padding:5,
      
     },
     mainbuttons:{
      flexDirection:'row',
      marginTop:15,
      justifyContent:'center'

     }
  
  })