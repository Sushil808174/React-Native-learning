import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.heading}>Trending places</Text>
      <View style={[styles.card,styles.elevatedCard]}>
            <Image 
                source={{
                    uri:'https://abouther.in/wp-content/uploads/2023/06/Khajuraho.webp'
                }}
                style={styles.imageCard}
            />
            <View style={styles.cardBody}>
                <Text style={styles.cardTitle}>Khajuraho</Text>
                <Text style={styles.cardLabel}>Madhaya Pradesh, India</Text>
                <Text style={styles.cardDescription}>Is a city in Madhya Pradesh with the country’s largest group of medieval Hindu and Jain temples famous for their erotic sculptures. These temples built by the Chandelas are a testimony to India’s diversity. The temples are symbolic of the Hindu values of Dharma, Kama, Artha and Moksha.</Text>
                <Text style={styles.cardFooter}>20 minutes away</Text>
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
    card:{
        width:380,
        height:410,
        // backgroundColor:'red',
        marginVertical:14,
        marginHorizontal:16,
        borderRadius:6,
    },
    elevatedCard:{
        backgroundColor:'#FFFFFF',
        elevation:6,
        shadowOffset:{
            width:1,
            height:1
        }
    },
    imageCard:{
        height:200,
        marginBottom:8,
        borderTopLeftRadius:6,
        borderTopRightRadius:6
    },
    cardBody:{
        flex:1,
        flexGrow:1,
        padding:12
    },
    cardTitle:{
        color:'#000000',
        fontSize:22,
        fontWeight:'bold',
        marginBottom:6
    },
    cardLabel:{
        color:'#000000',
        fontSize:15,
        marginBottom:8
    },
    cardDescription:{
        color:'#207398',
        fontSize:12,
        flexShrink:1,
        marginBottom:12
    },
    cardFooter:{
        color:'#000000'
    }
})

export default FancyCard