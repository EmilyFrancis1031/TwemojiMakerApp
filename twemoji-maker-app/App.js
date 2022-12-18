import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import BaseRadioButtons from './components/componentRadioButtons/baseRadioButtons';
import LeftEyeRadioButtons from './components/componentRadioButtons/leftEyeRadioButtons';
import RightEyeRadioButtons from './components/componentRadioButtons/rightEyeRadioButtons';
import LeftEyebrowRadioButtons from './components/componentRadioButtons/leftEyebrowRadioButtons';
import RightEyebrowRadioButtons from './components/componentRadioButtons/rightEyebrowRadioButtons';
import NoseRadioButtons from './components/componentRadioButtons/noseRadioButtons';
import MouthRadioButtons from './components/componentRadioButtons/mouthRadioButtons';

import ComponentSelectors from './components/componentRadioButtons/componentSelectors';
import ComponentEditors from './components/componentEditors';
import Emoji from './components/emojiComponent';


export default function App() {

  var emojiComps =
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
    },
    lefteyebrow: {
      key: 'neutral-left-eyebrow',
      attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }
    },
    righteyebrow: {
      key: 'neutral-right-eyebrow',
      attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }
    },
    nose: {
      key: 'lying-nose',
      attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }
    },
    mouth: {
      key: 'small-smile',
      attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }
    }
  }

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
      { value: 'neutral-right-eye' },
      { value: 'pensive-right-eye' },
    ],
    lefteyebrow:[
      { value: 'neutral-left-eyebrow' }
    ],
    righteyebrow:[
      { value: 'neutral-right-eyebrow' }
    ],
    nose:[
      { value: 'lying-nose'}
    ],
    mouth:[
      { value: 'small-smile'}
    ]

  }
  var compTypes = ['base','lefteye','righteye','lefteyebrow','righteyebrow','nose','mouth','lefthand','righthand','hat']
  const componentSelectors = [
    { value: 'base' },
    { value: 'lefteye' },
    { value: 'righteye' },
    { value: 'lefteyebrow' },
    { value: 'righteyebrow' },
    { value: 'nose' },
    { value: 'mouth' },
    { value: 'lefthand'},
    { value: 'righthand'},
    { value: 'hat'}
  ];
  var compRadioButtons = [<BaseRadioButtons  initActive={emojiComps.base.key} data={comps['base']} onSelect={(value) => {emojiComps.base.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />,
                          <LeftEyeRadioButtons initActive={emojiComps.lefteye.key} data={comps['lefteye']} onSelect={(value) => {emojiComps.lefteye.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />,
                          <RightEyeRadioButtons initActive={emojiComps.righteye.key} data={comps['righteye']} onSelect={(value) => {emojiComps.righteye.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />,
                          <LeftEyebrowRadioButtons initActive={emojiComps.lefteyebrow.key} data={comps['lefteyebrow']} onSelect={(value) => {emojiComps.lefteyebrow.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />,
                          <RightEyebrowRadioButtons initActive={emojiComps.righteyebrow.key} data={comps['righteyebrow']} onSelect={(value) => {emojiComps.righteyebrow.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />,
                          <NoseRadioButtons initActive={emojiComps.nose.key} data={comps['nose']} onSelect={(value) => {emojiComps.nose.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />,
                          <MouthRadioButtons initActive={emojiComps.mouth.key} data={comps['mouth']} onSelect={(value) => {emojiComps.mouth.key=value, setEmoji(<Emoji emojiComps={emojiComps}/>)}} />
                        
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
