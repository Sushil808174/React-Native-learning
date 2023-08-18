import React from "react";
import {SafeAreaView,View,Text,StyleSheet} from 'react-native'

function App(){

  return(
      <View style={styles.container}>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
        <Text style={styles.text}>Hello World</Text>
      </View>
  )

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'green',
    fontSize:33
  }
})
export default App