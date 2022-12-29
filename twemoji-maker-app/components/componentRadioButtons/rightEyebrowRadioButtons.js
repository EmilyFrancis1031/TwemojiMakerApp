import React, { useState } from 'react';
import { Dimensions, View,ScrollView, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import SVG from 'react-native-svg'
import getNewEmojiComponent from '../../scripts/getNewEmojiComponent';
export default function RightEyebrowRadioButtons({ data, onSelect, initActive }) {
  const [userOption, setUserOption] = useState(initActive);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {data.map((item) => {
        //console.log(item.value)
        return (
          <TouchableOpacity key={item.value}
            style={item.value === userOption ? styles.selected : styles.unselected}
            onPress={() => selectHandler(item.value)}>
            <SVG height='50' width='50' viewBox='0 0 36 36'>{getNewEmojiComponent(item.value, {})}</SVG>
            

          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },
        unselected: {
      borderColor: 'white',
      borderWidth: 2,
      margin: Dimensions.get('window').height*0.01,
      padding: Dimensions.get('window').height*0.01,
      borderRadius: Dimensions.get('window').height*0.015,
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').height*0.1,
    height: Dimensions.get('window').height*0.1,
    
      },
    selected: {
      borderColor: 'cornflowerblue',
      borderWidth: 2,
      margin: Dimensions.get('window').height*0.01,
      padding: Dimensions.get('window').height*0.01,
      borderRadius: Dimensions.get('window').height*0.015,
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').height*0.1,
    height: Dimensions.get('window').height*0.1,
      },
  });