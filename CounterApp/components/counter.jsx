import { useState } from "react"
import { StyleSheet,Button, View ,Text} from "react-native"

const Counter = () =>{
    const [count,setCount] = useState(0)
    const IncrementBtn=()=>{
        setCount(count+1)
    }
    const DecrementBtn=()=>{
        setCount(count-1)
    }

    return (
        <View style={style.container}>
        <Text style={style.Text}> Counter : {count} </Text>
        <Button title="Increment" onPress={IncrementBtn}/>
        <Button title="Decrement" onPress={DecrementBtn}/>
        </View>
    )
}

const style = StyleSheet.create({
    container :{
        width:300,
        height:200,
        backgroundColor:'white'
    },
    Text :{
        flex:1,
        fontSize:50,
        textAlign:'center',
        margin:'auto',
        backgroundColor:'green'
    }
})

export default Counter