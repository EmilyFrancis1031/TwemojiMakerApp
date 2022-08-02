import React, { useState } from 'react';
import { Dimensions, View,ScrollView, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import SVG from 'react-native-svg'
import { NeutralFace, AnxiousFace, ClownFace } from './bases/baseComps';
import {NeutralLeftEye, PensiveLeftEye} from './leftEyes/leftEyeComps'

export default function BaseRadioButtons({ data, onSelect, initActive }) {
  const [userOption, setUserOption] = useState(initActive);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  const getNewEditableEmojiComponent = (compKey, color1=null, color2=null,color3=null, color4=null, color5=null, scale=1, x=0, y=0, rot=0) => {
    var newComponent = null;
    switch (compKey) {
      case 'neutral-face': newComponent = <NeutralFace type='base' key='neutral-face' scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'anxious-face': newComponent = <AnxiousFace type='base' key='anxious-face' scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'clown-face': newComponent = <ClownFace type='base' key='clown-face' scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      case 'angry-horns-face': newComponent = <AngryHornsFace type='base' key='angry-horns-face' color1={color1} scaleProp={scale} xProp={x} yProp={y} rProp={rot}/>;
        break;
      default:  newComponent = null;
   }
   return newComponent
  }
  return (
    <ScrollView horizontal={true}style={{flexDirection:'row'}}>
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