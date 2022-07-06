import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ImageBackground } from 'react-native';
import HairItem from './assets/components/HairItem';

export default function App() {
  return (
    <View style={styles.container}>
      <HairItem 
        name="Curly Brazillian" 
        tagLine="Order online for"
        tagLineCTA ="Touchless Delivery" 
        img={require("./assets/images/hair0.jpg")}
      />
     
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  

});
