import React from 'react';
import { View, Text, ImageBackground} from 'react-native';
import styles from "./styles"
import StyledButton from '../StyledButton';

const hairItem =(props) => {

    const { name, tagLine, tagLineCTA , img} = props;  
    return(
        <View style={styles.hairContainer}>
        
        <ImageBackground source={img} style={styles.img}></ImageBackground>
        <View style={styles.Titles}>
          <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}
          {' '}
          <Text style={styles.subtitleCTA}>
            {tagLineCTA}
          </Text>
        </Text> 
        
        </View>

        <View style={styles.buttonsContainer}>
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

      </View>

    );
}

export default hairItem;