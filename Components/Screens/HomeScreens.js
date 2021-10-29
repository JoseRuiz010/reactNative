import React, { useEffect, useState } from "react";
import { View, Text,Button, FlatList } from "react-native";
import { getTareas } from "../api";
import Layaut from "../Layaut";
import List from "../List";

 

const HomeScreens = ( ) => {
 
const [state, setstate] = useState([])

const loadTasks=async ()=>{
 
  const data= await getTareas()
  setstate(data);
   
}
useEffect(() => {
  
  loadTasks()   
}, [state])
  return (
    <Layaut>
       <List state={state}></List>
    </Layaut>
  );
};

export default HomeScreens;
