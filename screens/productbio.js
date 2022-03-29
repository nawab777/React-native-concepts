import React, { useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity} from 'react-native'
import { Item } from 'react-native-paper/lib/typescript/components/List/List'



export default function Productbio({navigation,route}){
    
    const { price,product}=route.params;
    
    return(
         <View style={style.mianbox} >
             <View style={{flex:0.8}}>     
               <Image  source={product} style={{width:'80%',alignSelf:'center',borderRadius:10,height:undefined,resizeMode:'stretch',flex:1}} /> 
               </View>
               <View>
                <Text style={{color:'black',marginTop:5,marginLeft:50,fontSize:20,fontFamily:'bold'}}>Rs {price}</Text>
               </View>

         </View>



        
        )


}
const style=StyleSheet.create({
   mianbox:{
       backgroundColor:'gray',
       flex:0.5

   }



})