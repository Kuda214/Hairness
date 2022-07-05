import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import styles from "./styles"

const hairItem =() => {
    return(
        <View style={styles.hairContainer}>
        
        <ImageBackground source={require("../../images/hair0.jpg")} style={styles.img}></ImageBackground>
        <View style={styles.Titles}>
          <Text style={styles.title}>Curly Brazillian</Text>
        <Text style={styles.subtitle}>Starting at R970.00</Text> 
        </View>
      </View>

    );
}

export default hairItem;