import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getAllUser } from '../Data'

const Header = () => {
  return (
    <Header style={styles.container}>
      <Text style={styles.text}>Header</Text>
    </Header>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        backgroundColor:'#03203C'
    },
    text:{
        color:'#242B2E'
    }
})