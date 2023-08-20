import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ContactList = () => {
    const contact = [
        {
            uid:1,
            name:'Susheel Kumar',
            status:'Develop a React app',
            imageUrl:'https://avatars.githubusercontent.com/u/115461689?v=4'
        },
        {
            uid:2,
            name:'Aman Kumar',
            status:'Develop a Django app',
            imageUrl:'https://avatars.githubusercontent.com/u/87702404?v=4'
        },
        {
            uid:3,
            name:'Himanshu Sahu',
            status:'Develop a Spring Boot Project',
            imageUrl:'https://avatars.githubusercontent.com/u/115461666?v=4'
        },
        {
            uid:4,
            name:'Sparsh Kotwani',
            status:'Develop a Python Program',
            imageUrl:'https://avatars.githubusercontent.com/u/115460959?v=4'
        },
    ]
  return (
    <View>
      <Text style={styles.heading}>ContactList</Text>
      <ScrollView scrollEnabled={false} style={styles.container}>
            {contact.map((item) => (
              <View key={item.uid} style={styles.userCard}>
                  <Image
                    source={{
                      uri: item.imageUrl
                    }}
                    style={styles.userImage}
                  />
                  <View>
                  <Text style={styles.userName}>{item.name}</Text>
                  <Text style={styles.userStatus}>{item.status}</Text>
                  </View>
              </View>
            ))}  
      </ScrollView>
    </View>
  )
}

export default ContactList

const styles = StyleSheet.create({
  heading:{
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
  },
  container:{
    paddingHorizontal:16,
    marginBottom:5,
    marginTop:10
  },
  userCard:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:7,
    backgroundColor:'#03203C',
    padding:9,
    borderRadius:12
  },
  userImage:{
    width:60,
    height:60,
    borderRadius: 60 / 2,
    marginRight:16
  },
  userName:{
    fontSize:16,
    fontWeight:'600',
    color:'#FFFFFF'
  },
  userStatus:{
    fontSize:12
  }
})