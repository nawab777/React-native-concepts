
import { SafeAreaView, ScrollView, Text, View ,Image, ImageBackground,StyleSheet, TextInput, Button, Touchable,TouchableOpacity} from 'react-native'
import React, { Component } from 'react'
import ModalInjection from 'react-native/Libraries/Modal/ModalInjection'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { create } from 'react-test-renderer'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './screens/login'
import Tabbar from './screens/tabnavigation'
import Drawertab from './screens/tabnavigation'
import Productbio from  './screens/productbio'
import {Provider} from 'react-redux'
import { store } from './redux/store'

export default function App(){
  const Stack=createNativeStackNavigator();
    return (
      <Provider store={store}>
      <NavigationContainer>
     <Stack.Navigator screenOptions={{header:()=>null}}  >
      <Stack.Screen name='Login' component={Login}  />
    <Stack.Screen  name='Drawertab' component={Drawertab} />
    <Stack.Screen name='Productbio' component={Productbio} />
    
      

     </Stack.Navigator>

      </NavigationContainer>
      </Provider>
    )
    
  }
  