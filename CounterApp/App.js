import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/counter';
import Navbar from './components/navbar';
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar/>
      <View style={styles.content}>
      <Text style={styles.text}>Welcome in our App</Text>
      <Counter/>
      <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'white'
  },
  text:{
    fontSize:25
  },
  content: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
