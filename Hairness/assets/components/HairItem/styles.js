import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    hairContainer:{
        width: '100%',
        height: '100%',
      },
      Titles:{
        marginTop: '30%',
        width: '100%',
        textAlign: 'center',
        alignItems:'center',
        justifyContent:'center',
    
      },
      title:{
        fontSize:34,
        fontWeight: 'bold',
        color:'#fff'
      },
      subtitle:{
        fontSize:16,
        color: "#e2e3c5",
      },
      subtitleCTA:{
        textDecorationLine:'underline',
        
      },
      img:{
        width:'100%',
        height:'100%',
        resizeMode:'cover',
        position:'absolute',
      },
      buttonsContainer:{
        position:'absolute',
        bottom:50,
        width:'100%',
      }
});

export default styles;