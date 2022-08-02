import React, { useState } from 'react';
import { Dimensions, View,ScrollView, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import SVG from 'react-native-svg'
import {NeutralLeftEye, PensiveLeftEye} from './leftEyes/leftEyeComps'

export default function LeftEyeRadioButtons({ data, onSelect, initActive }) {
  const [userOption, setUserOption] = useState(initActive);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  const getNewEditableEmojiComponent = (compKey, color1=null, color2=null,color3=null, color4=null, color5=null, scale=1, x=0, y=0, rot=0) => {
    var newComponent = null;
    switch (compKey) {
      case 'neutral-left-eye': newComponent = <NeutralLeftEye type='left-eye' key='neutral-left-eye' scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'pensive-left-eye': newComponent = <PensiveLeftEye type='left-eye' key='pensive-left-eye' scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      default:  newComponent = null;

   }

   return newComponent
  }
  return (
    <ScrollView horizontal={true} style={{flexDirection:'row'}}>
      {data.map((item) => {
        return (
          <TouchableOpacity key={item.value}
            style={item.value === userOption ? styles.selected : styles.unselected}
            onPress={() => selectHandler(item.value)}>
            <SVG height='50' width='50' viewBox='0 0 36 36'>{getNewEditableEmojiComponent(item.value)}</SVG>
            

          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
        unselected: {
      borderColor: 'white',
      borderWidth: 2,
      margin: 5,
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').height*0.1,
    height: Dimensions.get('window').height*0.1,
    
      },
    selected: {
      borderColor: 'cornflowerblue',
      borderWidth: 2,
      margin: 5,
      padding: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('window').height*0.1,
    height: Dimensions.get('window').height*0.1,
      },
  });