import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.heading}>Elevated Cards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Tap</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>me</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>to</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>Scroll</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>more...</Text>
        </View>
        <View style={[styles.card,styles.cardElevated]}>
            <Text>😍</Text>
        </View>
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    heading:{
        fontSize:24,
        fontWeight:'bold',
        marginHorizontal:8
    },
    container:{
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        margin:10,
        borderRadius:5
    },
    cardElevated:{
        backgroundColor:'#CAD5E2',
        elevation:5,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'red',
        shadowOpacity:.4
    }
})
export default ElevatedCards