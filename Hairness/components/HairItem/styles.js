import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  carContainer: {
    width: '100%',
    height: Dimensions.get('window').height * 1,
  },
  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center',
    
  },
  title: {
    color:'#fff',
    fontSize: 40,
    fontWeight: '500',
  },
  subtitleCTA: {
    textDecorationLine: 'underline',
    color:'#fcf1dc'
  },
  subtitle: {
    fontSize: 16,
    color: '#fcf1dc'
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: 50,
    width: '100%',
  }
});

export default styles;
