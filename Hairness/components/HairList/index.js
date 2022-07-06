import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import HairItem from "../HairItem";
import styles from './styles';
import hair from './hairPieces';

const HairList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={hair}
        renderItem={({item}) => <HairItem hairPieceInfo={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  );
};

export default HairList;
