import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { list } from '../Data'
const MainContent = () => {

  const handlePost =(e)=>{

  }    

  const handleDelete =(e)=>{

  }

  return (

    <View style={styles.container}>
        {list.map((ele)=>(
            <View key={ele.id} style={styles.card}>
                <Text>{ele.name}</Text>
                <Text>{ele.email}</Text>
                <Text>{ele.address}</Text>
            </View>
        ))}
      <TouchableOpacity style={styles.btn} onPress={handlePost}>
        <Text style={styles.text}>Create</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={handleDelete}>
        <Text style={styles.text}>Delete</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainContent

const styles = StyleSheet.create({
    container:{
        flex:.5,
        justifyContent:'space-around',
        alignItems:'center'

    },
    card:{
        width:300,
        height:300,
        marginHorizontal:8,
        marginVertical:8,
        borderWidth:3,
        borderRadius:8,

    },
    btn:{
        width:100,
        height:40,
        backgroundColor:'#35BDD0',
        elevation:{
            width:2,
            height:2
        }
    }

})