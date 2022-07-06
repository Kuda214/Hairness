import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import styles from "./styles"
import StyledButton from '../StyledButton';

const hairItem =() => {
    return(
        <View style={styles.hairContainer}>
        
        <ImageBackground source={require("../../images/hair0.jpg")} style={styles.img}></ImageBackground>
        <View style={styles.Titles}>
          <Text style={styles.title}>Curly Brazillian</Text>
        <Text style={styles.subtitle}>Starting at R970.00</Text> 
        </View>

        <StyledButton 
          type ="primary" 
          content ="Custom Order" 
          onPressed={()=>{
            console.warn("Custom Order was pressed");
          }}
        />

        <StyledButton 
          type ="secondary" 
          content ="Existing Inventory" 
          onPressed={()=>{
            console.warn("Custom Order was pressed");
          }}
        />
        
      </View>

    );
}

export default hairItem;