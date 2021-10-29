import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Items = ({tasks}) => {
    return (
        <View style={style.itemContainer}>
            <Text style={style.itemTitle}>{tasks}</Text>
            <Text style={style.itemTitle}>descripction</Text>
        </View>
    )
}

const style=StyleSheet.create({
    itemContainer:{
        backgroundColor:'#333333',
        padding:20,
        marginVertical:8,
        borderRadius:5
        
   },
   itemTitle:{
       color:'#ffffff'
   }
})

export default Items
