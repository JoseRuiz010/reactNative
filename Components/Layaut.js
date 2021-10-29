import React from 'react'
import { View, StyleSheet,StatusBar } from 'react-native'

const Layaut = ({children}) => {
    return (
        <View style={style.container}>
            <StatusBar backgroundColor='#222f3e'/>
            {children}
        </View>
    )
}
const style= StyleSheet.create({
    container:{
        backgroundColor:'#222f3e',
        padding:20,
        flex:1,
        alignItems:'center'
    }
})

export default Layaut
