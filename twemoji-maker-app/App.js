import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import BaseRadioButtons from './components/componentRadioButtons/baseRadioButtons';
import LeftEyeRadioButtons from './components/componentRadioButtons/leftEyeRadioButtons';
import RightEyeRadioButtons from './components/componentRadioButtons/rightEyeRadioButtons';
import ComponentSelectors from './components/componentRadioButtons/componentSelectors';
import ComponentEditors from './components/componentEditors';
import Emoji from './components/emojiComponent';


export default function App() {

  var [emojiComps, setEmojiComps] = useState( 
    {base: {
        key:'neutral-face',
        attr: {
          scale: 1, rotation: 0,
          x: 0, y: 0, h: 43, s: 100, l: 65, 
        }
      },
    lefteye: {
      key: 'neutral-left-eye',
      attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }
    },
    righteye: {
      key: 'neutral-right-eye',
      attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }
    }
  })

    var [emoji, setEmoji] = useState(<Emoji emojiComps={emojiComps}/>)
  
  const comps = {
    base: [
      { value: 'neutral-face' },
      { value: 'anxious-face' },
      { value: 'clown-face' },
      { value: 'angry-horns-face' },

    ],
    lefteye: [
      { value: 'neutral-left-eye' },
      { value: 'pensive-left-eye' },
    ],
    righteye: [
      { value: 'neutral-right-eye' }
    ]

  }
  var compTypes = ['base','lefteye','righteye']
  const componentSelectors = [
    { value: 'base' },
    { value: 'lefteye' },
    { value: 'righteye' },
    { value: 'lefteyebrow' },
    { value: 'righteyebrow' },
    { value: 'nose' },
    { value: 'mouth' },
  ];
  var compRadioButtons = [<BaseRadioButtons  initActive={emojiComps.base.key} data={comps['base']} onSelect={(value) => {emojiComps.base.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />,
                          <LeftEyeRadioButtons initActive={emojiComps.lefteye.key} data={comps['lefteye']} onSelect={(value) => {emojiComps.lefteye.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />,
                          <RightEyeRadioButtons initActive={emojiComps.righteye.key} data={comps['righteye']} onSelect={(value) => {emojiComps.righteye.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />
                        
                        ]
  var [activeComponentType, setActiveComponentType] = useState('base')
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.emojiViewContainer}>
        {emoji}
      </View>

      <ComponentSelectors initActive={'base'} data={componentSelectors} onSelect={(value) => {setActiveComponentType(value)}} />



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
  },
  emojiViewContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('window').height*0.05,
  },
  emojiComponentsContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.25,
  }
});
