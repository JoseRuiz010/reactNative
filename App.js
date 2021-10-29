import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import HomeScreens from "./Components/Screens/HomeScreens";
import TasksScreen from "./Components/Screens/TasksScreen";
import { NavigationContainer,NavigationAction } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskFormScreen from "./Components/Screens/TaskFormScreen";

const Stack = createNativeStackNavigator();

export default function App(props) {
   return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='HomeScreens'>
        <Stack.Screen name="HomeScreens" component={HomeScreens}
         options={({navigation})=>({
           headerStyle:{backgroundColor:'#222f3e'},
           headerTitleStyle:{color:'#ffffff'},
           headerRight:()=>(
             <TouchableOpacity onPress={()=>navigation.navigate('TaskFormScreen')}>
             <Text style={{color:'#ffffff', marginRight:20, fontSize:15}}>New</Text>
             </TouchableOpacity>
           )
      ,title:'Tasks'
      
      })}></Stack.Screen>
        <Stack.Screen
          name="TaskFormScreen"
          component={TaskFormScreen}
          options={{
            headerStyle:{backgroundColor:'#222f3e'},
            headerTitleStyle:{color:'#ffffff'},
            headerTintColor:'#ffffff'
          }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
