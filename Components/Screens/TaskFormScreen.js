import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native'
import { addTareas } from '../api'
import Layaut from '../Layaut'

const TaskFormScreen = ({navigation}) => {
  
    const [state, setstate] = useState({
        tarea:'',
        descripcion:''
    })
    const handleChange=(texto,name)=>{
        setstate({...state,[name]:texto})
     }
    const handleSubmit=()=>{
        addTareas(state);
        navigation.navigate('HomeScreens')
    }
    return (
        <Layaut>
            <Text style={{color:'#ffffff',fontSize:20, marginBottom:20,fontStyle:'bold'}}>
                New Tasks</Text>

            <TextInput
            onChangeText={text=> handleChange(text,'tarea')}
            style={style.input}
            placeholder='Title'
            placeholderTextColor='#546574'
            ></TextInput>
            <TextInput style={style.input}
            onChangeText={text=> handleChange(text,'descripcion')}
            placeholder='Descripcion'
            placeholderTextColor='#546574'
            ></TextInput>
            <TouchableOpacity style={style.butonSave} onPress={()=>handleSubmit()}>
                <Text style={style.buttonText}>Save Tasks</Text>
            </TouchableOpacity>
        </Layaut>
    )
}
const style=StyleSheet.create({
    input:{
      
        marginBottom:7,
        width:'90%',
        borderWidth:1,
        borderColor:'#10ac84',
        fontSize:16,
        height:35,
        color:'#ffffff',
        padding:4,
       textAlign:'center',
        borderRadius:5    
},
butonSave:{
    paddingTop:10,
    paddingBottom:10,
    borderRadius:5,
    marginBottom:3,
    marginTop:20,
    backgroundColor:'#10ac84',
    width:'90%'
},
buttonText:{
    color:'#ffffff',
    textAlign:'center',
    fontSize:15,
    fontStyle:'bold'}
})
export default TaskFormScreen
