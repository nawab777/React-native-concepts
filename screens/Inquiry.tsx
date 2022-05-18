import React, { Component, useEffect } from 'react'
import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp, widthPercentageToDP} from 'react-native-responsive-screen';

export default function Inquiry(){

return(
<View style={styles.maincontainer}>
    

   <View style={styles.upperbox}>

<TouchableOpacity><Text>Previous Inquiry</Text></TouchableOpacity>
<TouchableOpacity><Text>Make new Inquiry</Text></TouchableOpacity>
</View>   

</View>



)



}
const styles=StyleSheet.create({
    maincontainer:{
    flex:1,
    backgroundColor:'gray'
    
    
    },
    upperbox:{
        flexDirection:'row',
        borderWidth:'1',
        widthPercentageToDP:wp(90)

    }
    })