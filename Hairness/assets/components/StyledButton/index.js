import React from 'react';
import { View, Text, ImageBackground, Pressable} from 'react-native';
import styles from "./styles"

const StyledButton =(props) => {
    
    const {type, content , onPressed } = props;

    const backgroundColor = type === 'primary' ? '#f00': '#000';

    return(
        <View style={styles.container} >
            <Pressable 
                style={[styles.button, {backgroundColor: backgroundColor}]} 
                onPress={()=> onPressed()}
            >

            <Text style={[styles.text]}>{content}</Text>

            </Pressable>
      </View>

    );
}

export default StyledButton;