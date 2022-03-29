import { NavigationContainer }  from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Entypo from "react-native-vector-icons/Entypo"
import AntDesign from "react-native-vector-icons/AntDesign"
import { TabRouterOptions } from "@react-navigation/native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons"
import React from "react";
import Home from "./supa";
import Catalouge from "./catalouge";
import Notifications from "./notification";
import Profile from "./profile";
import Cart from "./Cart";
import { Header } from "react-native/Libraries/NewAppScreen";
import { BottomTabBar } from "@react-navigation/bottom-tabs";
import {createDrawerNavigator}  from  "@react-navigation/drawer";
import { Drawer } from "react-native-paper";


const Tabbar=({navigation})=>{
    const Tab =createBottomTabNavigator();
    
    
    return(
         
         <Tab.Navigator   screenOptions={({route})=>({
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
            tabBarActiveBackgroundColor:'grey',
            tabBarShowLabel:true,
            header:()=>null,
            
           tabBarIcon:({focused,size,color})=>{
             let iconname;
             let colorname;
             
             if(route.name==='Home'){
                 iconname=focused? 'aperture-outline' :'aperture-sharp'
                 colorname=focused? 'black':'brown'
                 
             }else if(route.name==='Catalouge'){
                 iconname=focused? 'apps':'apps-sharp'
                 colorname=focused? 'black':'brown'
             }else if(route.name==='Notifications'){
                iconname=focused? 'cog':'cog-outline'
                colorname=focused? 'black':'brown'
            }else if(route.name==='Profile'){
                iconname=focused? 'flower-sharp':'flower-outline'
                colorname=focused? 'black' :'brown'
                
            }else if(route.name==='Cart'){
                iconname=focused? 'cart':'cart-sharp'
                colorname=focused? 'black':'brown'
            }
               
              return <Ionicons  name={iconname} size={25} color={colorname}   />
                                                             
                    
           }
           
        
              

         })}  
         
         >
         <Tab.Screen  name="Home" component={Home} />
         <Tab.Screen  name="Catalouge"  component={Catalouge} />
         <Tab.Screen  name="Notifications"  component={Notifications}options={{tabBarBadge:4}} />
         <Tab.Screen name="Profile"  component={Profile}/>
         <Tab.Screen name="Cart" component={Cart} />

         

         </Tab.Navigator>
         

        

    )
    

}
 export default function Drawertab({navigation}){
    const Drawer =createDrawerNavigator();
    return(

       
         <Drawer.Navigator screenOptions={{header:()=>null}} >
             <Drawer.Screen  name='Tabbar' component={Tabbar}  />
             <Drawer.Screen  name="Catalouge" component={Catalouge} />
             <Drawer.Screen  name="Notifications" component={Notifications} />
             <Drawer.Screen  name="Profile" component={Profile} />
             <Drawer.Screen  name="Cart" component={Cart} />
        
        </Drawer.Navigator>
    )
    
    
        }