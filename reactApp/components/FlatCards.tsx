import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const FlatCart = () => {
  return (
    <View>
      <Text style={styles.heading}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}>
            <Text>Red</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}>
            <Text>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}>
            <Text>Green</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    container: {
      flex:1,
      flexDirection:'row',
      padding:8
    },
    card: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        margin:10,
        borderRadius:5
    },
    cardOne: {
        backgroundColor:'#FF5354'
    },
    cardTwo: {
        backgroundColor:'#50DBB4'
    },
    cardThree: {
        backgroundColor:'#5DA3FA'
    },
})


export default FlatCart