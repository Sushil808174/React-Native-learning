import {StyleSheet, View ,Text} from "react-native"

const Navbar = ()=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Counter App</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:360,
        marginTop:30,
        paddingLeft:5,
        backgroundColor:'black'
    },
    text:{
        fontSize:25,
        color:'white',
        margin:10
    }
})

export default Navbar