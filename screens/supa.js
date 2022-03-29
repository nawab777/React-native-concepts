import React from 'react'
import { Text,View,StyleSheet,Image, TextInput, ScrollView, FlatList, Alert, Pressable } from 'react-native'
import { IconProps } from 'react-native-vector-icons/Icon'
import  AntDesign  from 'react-native-vector-icons/AntDesign'
import iconButton from 'react-native-vector-icons/dist/lib/icon-button'
import { IconButtonProps } from 'react-native-vector-icons/Icon'
import Feather from 'react-native-vector-icons/Feather'
import Productbio from './productbio'

export default function  Home ({navigation}) {
  
  const data=[
    {price:5000,product:require('../assets/data1.jpg')},
    {price:6000,product:require('../assets/data2.jpg')},
    {price:7000,product:require('../assets/data3.jpg')},
    {price:8000,product:require('../assets/data4.jpg')},
    {price:9000,product:require('../assets/data5.jpg')},
    {price:12450,product:require('../assets/data6.jpg')}
  ]
  const showdetails=(item)=>{
    
    
    navigation.navigate('Productbio',item);

    

  }
  return (

<View style={styles.body}>
    
<View style={styles.header}> 

<View style={{flexDirection:'row',padding:13,justifyContent:'space-between'}}>
<View style={{}}>
    <Text style={{color:'white'}}>Back</Text>
</View> 
<View style={{}}>
<Text style={{color:'white',fontWeight:'normal'}}> Clothing</Text>
</View>
<View style={{}}>
  
<Feather name='sliders' size={23} color='white' />

</View>
</View>

<View style={styles.Textinput}>
<AntDesign name='search1' size={21} style={{marginTop:11,marginRight:2}}/>
<TextInput   placeholder='What are you looking For?'  />
</View>
 </View>


<View style={styles.databox}> 
   
  <FlatList   
 data={data}  numColumns={2}
 renderItem={({item})=>(
  <View style={styles.dataview}> 
    <View style={styles.imageview}> 
    <Pressable style={{flex:1}} onPress={()=>showdetails(item)} android_ripple={{color:'white'}}>
    <Image style={styles.imagedata} source={item.product} /> 
    </Pressable>
    </View> 
   <View style={styles.productinfo}>
     <Text>................</Text>
    <Text numberOfLines={2} style={{color:'black'}} >Astylish Women Open Front Long Sleeve...</Text>
    <View style={{flexDirection:'row',justifyContent:'flex-start',marginTop:5}}>
    <Text style={{fontWeight:'bold',marginRight:7,fontWeight:'bold' ,color:'black'}}>Rs</Text>
    <Text style={{fontWeight:'bold',color:'black'}}>{item.price}</Text>
    </View>
    

   </View>

   </View>
  
 )}
 

/>


</View> 

</View> 
 )
}
const styles=StyleSheet.create({
body:{
    flex:1,
    

},textview:{


}

,
imagedata:{
  flex:1,height:undefined, width:undefined, resizeMode:'stretch',
  borderRadius:10,
  borderWidth:10




}
,

imageview:{
  
 backgroundColor:'white',
 flex:0.6,
 borderRadius:10
 
 
 
 

}
,
productinfo:{
 backgroundColor:'white',
 flex:0.4,
 padding:5,
 marginTop:2

},
databox:{
flex:1, 
marginTop:57,
padding:10,

    


},
dataview:{

height:250,
width:'47%',
padding:4,
borderRadius:150,
marginHorizontal:4,









}

,
header:{
backgroundColor:'#ff4500',
height:67,


},Textinput:{
    
backgroundColor:'white',
flexDirection:'row',

width:'90%',
alignSelf:'center',
paddingLeft:10,
borderRadius:30,
height:40







}



})