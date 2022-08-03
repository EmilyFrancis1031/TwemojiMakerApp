import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import { NeutralFace, AnxiousFace } from './components/bases/baseComps';
import SVG, {G} from 'react-native-svg'
import Slider from '@react-native-community/slider'
import BaseRadioButtons from './components/baseRadioButtons';
import LeftEyeRadioButtons from './components/leftEyeRadioButtons';
import getNewEmojiComponent from './scripts/getNewEmojiComponent';
import ComponentSelectors from './components/componentSelectors';


export default function App() {

  var [activeElementAttributes, setActiveElementAttributes] = useState({scale: '1', rotation: '0', x: '0', y: '0', h: '0', s: '0', l: '0'})
  var [emojiComponentStrings, setEmojiComponentStrings] = useState({base: null, lefteye: null, righteye: null, lefteyebrow: null, righteyebrow: null, nose: null, mouth: null})
  var [activeComponentType, setActiveComponentType] = useState('base')
  
  var [baseComp, setBaseComp] = useState(getNewEmojiComponent('neutral-face', activeElementAttributes))
  var [leftEyeComp, setLeftEyeComp] = useState(null)
  
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
  var compRadioButtons = [<BaseRadioButtons  initActive={emojiComponentStrings['base']} data={comps['base']} onSelect={(value) => {setNewEmojiComponentString(0,value), setNewEmojiComponent(value)}} />,
                          <LeftEyeRadioButtons initActive={emojiComponentStrings['lefteye']} data={comps['lefteye']} onSelect={(value) => {setNewEmojiComponentString(1, value),  setNewEmojiComponent(value)}} />
                        ]
  const setNewActiveElementAttribute = (attrName, newValue) => {
    var tempActiveElementAttributes = activeElementAttributes;
    tempActiveElementAttributes[attrName] = newValue.toString();
    setActiveElementAttributes(tempActiveElementAttributes);
  }

  const setNewEmojiComponentString = (i, newComponent) => {
    var tempEmojiComponentStrings = emojiComponentStrings;
    tempEmojiComponentStrings[activeComponentType] = newComponent;
    setEmojiComponentStrings(tempEmojiComponentStrings)
  }

  const setNewEmojiComponent = (newComponentString) => {
    switch(activeComponentType){
      case 'base': setBaseComp(getNewEmojiComponent(newComponentString, activeElementAttributes))
        break;
      case 'lefteye': setLeftEyeComp(getNewEmojiComponent(newComponentString, activeElementAttributes))
        break;  
    }
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.emojiViewContainer}>
        <View style={styles.emojiView}>
          <SVG height='156' width='156' viewBox='0 0 36 36'>
            {baseComp}
            {leftEyeComp}
            
        
          </SVG>
        </View>
      </View>

    <View style={{width:Dimensions.get('window').width, height: Dimensions.get('window').height*0.1}}>
    <ComponentSelectors initActive={'base'} data={componentSelectors} onSelect={(value) => setActiveComponentType(value)} />

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
