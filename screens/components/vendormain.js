
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';
import React from 'react';
import { useState,useEffect } from 'react';
import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity,Pressable} from 'react-native'
// import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import { FlatList } from 'react-native-gesture-handler';
import { About } from './about';
// const[services,setservices]=useState();

export const Venddormain=(props)=>{
   
  
      const showgallery=()=>{
    return(
   <View style={styles.showview}>
     <Text>Gallery page</Text>
   </View>

    )


}
  
const [view ,setview]=useState(showgallery());

  const aboutview=()=>{
    const aboutimage=props.image2;
    return(
      <About image3={aboutimage} />
     )
  }
  const showabout=()=>{
    setview(aboutview());
  }
  const viewgallery=()=>{
setview(showgallery());

  }
  const viewservices=()=>{
    return(
    
      <View style={{flex:1,margin:6}}>
       <ScrollView>
                
        <View style={{backgroundColor:'white',borderWidth:1,borderColor:'black',height:hp(20),margin:5,borderRadius:10}}></View>
        <View style={{backgroundColor:'white',borderWidth:1,borderColor:'black',height:hp(20),margin:5,borderRadius:10}}></View>
        <View style={{backgroundColor:'white',borderWidth:1,borderColor:'black',height:hp(20),marginBottom:10,margin:5,borderRadius:10}}></View>
        </ScrollView>
 
       </View>
    
    )
  }
   const showservices=()=>{
     
     setview(viewservices());
   }
   const viewregister=()=>{
    return(

           <View>
               <Text>New sccreen to implement</Text>
            </View>

          )
   } 
const showregister=()=>{
  setview(viewregister());
}

return(
          
        <View style={{backgroundColor:'white',height:hp(100)}}>
        <View style={styles.Container}>
           <View style={styles.coverphoto}>
             {/* page header elments  */}
                <ImageBackground source={props.image} style={{flex:1}}>
                
           <View style={{flexDirection:'row',width:wp(100),justifyContent:'space-around',padding:6}}>
             <Pressable hitSlop={{top:2,left:2,right:2,bottom:2}}>
               <AntDesign name='left' size={23} color='white'/>
                </Pressable>
       <Text style={{color:'white',fontSize:18,fontWeight:'bold'}}>Edit Vendor Profile</Text>
       <Pressable hitSlop={{top:2,left:2,right:2,bottom:2}} android_ripple={{color:'white'}} style={{backgroundColor:'white',padding:2,borderRadius:6}}>
         <AntDesign name='setting' size={24} color='black' /> 
         </Pressable>
           </View>
           </ImageBackground>
      
           </View>
           {/* lower portion under user  coverphoto */}
           
           <View style={styles.lowerportion}>
             {/* whole box under lower portion */}
          <View style={styles.profileinfo}> 
          {/* profile dp here below */}
          <TouchableOpacity>
            <View style={styles.profileimage}>
                     
              <Image source={props.image}  style={{resizeMode:"stretch",width:wp(19),height:hp(9),borderRadius:26}}/>
             
      
             
            </View>
            </TouchableOpacity>
            {/* //about profile  */}
            <View style={styles.profiletext}>
              <Text style={{fontSize:20,alignSelf:'center',marginTop:4,fontWeight:'bold',color:'black'}}>{props.ownername}</Text>
              <View style={styles.rating}>  
               <Entypo name='users' size={15} color='orange' />
               <Text style={{marginLeft:4,marginRight:4,color:'black'}}>{props.followers}  |</Text>
               <Entypo name='star' size={15} color='orange'/>
               <Text style={{color:'black'}}>{props.rating} rating</Text> 
                </View>
                <View style={{alignSelf:'center'}}>
                 <Text style={{height:hp(7.5),textAlignVertical:'center',color:'black'}} numberOfLines={2}> {props.about} </Text></View>
                <View style={styles.mainbuttons}>
     
             <TouchableOpacity  style={styles.like}><AntDesign name='like2' size={15} color='white'/><Text style={{color:'white',marginLeft:4}}>like</Text></TouchableOpacity>
             <TouchableOpacity  style={[styles.like,styles.like2]}><Octicons name='report' size={15} color='#03B7EC'/><Text style={{color:'#03B7EC',marginLeft:4}}>Report</Text></TouchableOpacity>
                </View>
              </View>
          
         </View>
         {/* navigation from buisness profile */}
         <View style={{width:wp(90),backgroundColor:'lightgray',borderRadius:12,marginTop:10,padding:9,alignSelf:'center',flexDirection:'row'}}>
        {/* Gallery */}
        <TouchableOpacity onPress={()=>{viewgallery();}} >
         <View style={{flexDirection:'column',width:wp(22.5)}}>
         <FontAwesome5 name='images' size={20} color='black'style={{alignSelf:'center'}}/>
          <Text style={{alignSelf:'center',color:"black"}}>Gallery</Text>
         </View>
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>{showservices();}}>
          <View  style={{flexDirection:'column',width:wp(22.5)}}>
       <Feather  name='tool' size={20} color='black' style={{alignSelf:'center'}}/>
       <Text style={{alignSelf:'center',color:"black"}}>Services</Text>
     
          </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{showabout();}}>
           <View  style={{flexDirection:'column',width:wp(22.5)}}>
            <Entypo name='info-with-circle' size={20} color='black' style={{alignSelf:'center'}}/>
            <Text style={{alignSelf:'center',color:"black"}}>About</Text>
           </View>
           </TouchableOpacity>
           <TouchableOpacity  onPress={()=>{showregister();}}>
           <View style={{width:wp(22.5)}}>
             <Entypo name='dots-three-vertical' size={28} color='black' style={{alignSelf:'center',padding:4}}/>
             
           </View>
           </TouchableOpacity>
         </View>
         
          </View>
     
         </View>
         <View style={{backgroundColor:'white',flex:0.846}}>
         {view}
         </View>
         </View>
        

    )



}

const styles=StyleSheet.create({
    Container:{
     height:hp(55),
     width:wp(100),
     

    },
    
    coverphoto:{
       flex:0.8,
      //  justifyContent:'center',
      //  alignItems:'center',
       
  
    },like:{
      backgroundColor:'#03B7EC',
      width:wp(35),
      height:hp(4),
      borderRadius:8,
    flexDirection:'row',
    justifyContent:'center'
    ,alignItems:'center',marginLeft:10
      
    },like2:{
      backgroundColor:'white',
      borderColor:'#03B7EC',
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
    borderRadius:25,
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
      // marginTop:15,
      justifyContent:'center'


     }
  
  })