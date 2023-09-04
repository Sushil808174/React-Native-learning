import { Image, ImageSourcePropType, Pressable, StyleSheet, Text, View , Animated} from 'react-native'
import React, { useState ,useRef} from 'react'
import { PropsWithChildren } from 'react'
import one from './assests/one.png'
import two from './assests/two.png'
import three from './assests/three.png'
import four from './assests/four.png'
import five from './assests/five.png'
import six from './assests/six.png'

type DiceProps = PropsWithChildren<{
  imageUrls: ImageSourcePropType
}>

const  Dice = ({imageUrls}:DiceProps):JSX.Element=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrls} />
    </View>
  )
}

const App = (): JSX.Element => {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(one);
  const diceRotation = useRef(new Animated.Value(0)).current;

  const rollDiceOnTap = () => {
    // Simulate dice rolling with a rotation animation
    Animated.timing(diceRotation, {
      toValue: 1,
      duration: 1000, // Adjust the duration as needed
      useNativeDriver: false, // Set to false when using rotation
    }).start(() => {
      // After the animation is complete, set the dice image to a random face
      let randomNum = Math.floor(Math.random() * 6) + 1;
      switch (randomNum) {
        case 1:
          setDiceImage(one);
          break;
        case 2:
          setDiceImage(two);
          break;
        case 3:
          setDiceImage(three);
          break;
        case 4:
          setDiceImage(four);
          break;
        case 5:
          setDiceImage(five);
          break;
        case 6:
          setDiceImage(six);
          break;
        default:
          setDiceImage(one);
          break;
      }

      // Reset the rotation value for the next roll
      diceRotation.setValue(0);
    });
  };

  const spin = diceRotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.diceContainer, { transform: [{ rotate: spin }] }]}>
        <Dice imageUrls={diceImage} />
      </Animated.View>
      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll the Dice</Text>
      </Pressable>
    </View>
  );
};


export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#FFF2F2'
  },
  diceContainer:{
    margin:12
  },
  diceImage:{
    width:200,
    height:200
  },
  rollDiceBtnText:{
    paddingHorizontal:40,
    paddingVertical:10,
    borderWidth:2,
    borderRadius:8,
    borderColor:'#E5E0FFF',
    fontSize:16,
    color:'#8EA7E9',
    transform:'uppercase',
    fontWeight:'700'
  }
})