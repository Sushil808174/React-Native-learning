import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
    function openWebsite(websiteUrl: string){
        Linking.openURL(websiteUrl)
    }
  return (
    <View>
      <Text style={styles.heading}>Blog Card</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>What's new in Javascript 21-ES12</Text>
        </View>
        <Image 
            source={{
                uri:'https://abouther.in/wp-content/uploads/2023/06/Ajanta-and-Ellora.webp'
            }}
            style={styles.imageCard}
        />
        <View style={styles.bodyContainer}>
            <Text numberOfLines={3}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta minus accusamus, necessitatibus maxime in perferendis aperiam vero, cum expedita voluptate nostrum fuga quae iusto repellendus eligendi consequuntur architecto facilis deserunt.
            </Text>
        </View>
        <View style={styles.footerContainer}>
            <TouchableOpacity onPress={()=>openWebsite('https://www.linkedin.com/in/susheel-kumar-9497b5245/')}>
                <Text style={styles.socialLinks}>Read More</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>openWebsite('https://www.linkedin.com/in/susheel-kumar-9497b5245/')}>
                <Text style={styles.socialLinks}>Follow me</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
    heading:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    card:{
        width:380,
        height:400,
        marginHorizontal:16,
        marginVertical:12,
        borderRadius:8,
    },
    elevatedCard:{
        backgroundColor:'#E6425E',
        elevation:4,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#333',
        shadowOpacity:.5

    },
    headerContainer:{
        height:45,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        fontSize:16,
        fontWeight:'600',
        color:'#000'
    },
    imageCard:{
        height:200,
        marginBottom:8
    },
    bodyContainer:{
        padding:10
    },
    footerContainer:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
    },
    socialLinks:{
        fontSize:17,
        color:'#000',
        backgroundColor:'#EDC126',
        paddingHorizontal:20,
        paddingVertical:6,
        borderRadius:6,
        elevation:5,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:'#000',
        shadowOpacity:0.5,
    }
})