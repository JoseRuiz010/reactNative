import React from 'react'
import { View, Text, FlatList } from 'react-native'
import Items from './Items'

const List = ({ state }) => {
 
 
    const renderItems=({item})=>{
       return <Items key={item.tarea} tasks={item.tarea} ></Items>

    }
    

    return (
        <FlatList style={{ width:'100%'}} data={state}
            keyExtractor={(item, i) => i + 'lm'}
            renderItem={renderItems}
        ></FlatList>
        
    )
    }

export default List
