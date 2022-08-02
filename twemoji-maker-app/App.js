import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { NeutralFace, AnxiousFace } from './components/bases/baseComps';
import SVG from 'react-native-svg'
import Slider from '@react-native-community/slider'
import BaseRadioButtons from './components/baseRadioButtons';
import LeftEyeRadioButtons from './components/leftEyeRadioButtons';

import ComponentSelectors from './components/componentSelectors';


export default function App() {

  var [activeElementAttributes, setActiveElementAttributes] = useState({scale: '1', rotation: '0', x: '0', y: '0', r: '0', g: '0', b: '0'})
  var [activeHSL, setActiveHSL] = useState({hue: '0', sat: '0', val: '0'})
  var [emojiComponents, setEmojiComponents] = useState({base: null, lefteye: null, righteye: null, lefteyebrow: null, righteyebrow: null, nose: null, mouth: null})
  var [activeComponentType, setActiveComponentType] = useState('base')
  const comps = {
    base: [
      { value: 'neutral-face' },
      { value: 'anxious-face' },
      { value: 'clown-face' },
    ],
    lefteye: [
      { value: 'neutral-left-eye' },
      { value: 'pensive-left-eye' },
    ],

  }

  var compTypes = ['base','lefteye']
  

  const componentSelectors = [
    { value: 'base' },
    { value: 'lefteye' },
    { value: 'righteye' },
    { value: 'lefteyebrow' },
    { value: 'righteyebrow' },
    { value: 'nose' },
    { value: 'mouth' },
  ];

  const setNewActiveHSL = (newRGB, newValue) => {
    var tempActiveHSL = activeHSL;
    tempActiveHSL[newRGB] = newValue;
    setActiveHSL(tempActiveHSL);
  }
  const setNewActiveElementAttribute = (attrName, newValue) => {
    var tempActiveElementAttributes = activeElementAttributes;
    tempActiveElementAttributes[attrName] = newValue.toString();
    setActiveElementAttributes(tempActiveElementAttributes);
  }

  const setNewEmojiComponent = (newComponent) => {
    var tempEmojiComponents = emojiComponents;
    tempEmojiComponents[activeComponentType] = newComponent;
    setEmojiComponents(tempEmojiComponents)
    console.log(tempEmojiComponents)
  }
  var compRadioButtons = [<BaseRadioButtons  initActive={emojiComponents['base']} data={comps['base']} onSelect={(value) => {setNewEmojiComponent(value)}} />,
                          <LeftEyeRadioButtons initActive={emojiComponents['lefteye']} data={comps['lefteye']} onSelect={(value) => {setNewEmojiComponent(value)}} />
                        ]

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.emojiViewContainer}>
        <View style={styles.emojiView}>
          <SVG height='156' width='156' viewBox='0 0 36 36'>
          <NeutralFace/>
          
          
            
        
          </SVG>
        </View>
      </View>

    <View style={{width:Dimensions.get('window').width, height: Dimensions.get('window').height*0.1}}>
    <ComponentSelectors data={componentSelectors} onSelect={(value) => setActiveComponentType(value)} />

    </View>
    
      <View style={styles.emojiEditorsContainer}>
      </View>

      <View style={styles.emojiComponentsContainer}>
        {compRadioButtons[compTypes.indexOf(activeComponentType)]}

      </View>
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  emojiViewContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height*0.05
  },
  emojiView: {
    width: Dimensions.get('window').height*0.2,
    height: Dimensions.get('window').height*0.2,
    backgroundColor: '#fff',
    elevation: 10,
    shadowColor: '#171717',
    shadowOpacity: 0.2,
    shadowRadius: 15,
  },
  emojiEditorsContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.35,
    backgroundColor: '#ddd'
    
  },
  emojiComponentsContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.25,
    backgroundColor: '#fff'
  },

  emojiComponentsSelectorsContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.07,
    backgroundColor: 'red'
  },
  emojiComponentsSelectorsScrollView:{
    flexDirection: 'row'
  },

});
