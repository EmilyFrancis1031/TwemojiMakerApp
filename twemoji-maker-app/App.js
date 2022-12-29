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

  var [emojiComps, setEmojiComps] = useState(
    {base: {
        key:'neutral-face',
        /*attr: {
          scale: 1, rotation: 0,
          x: 0, y: 0, h: 43, s: 100, l: 65, 
        }*/
      },
    lefteye: {
      key: 'neutral-left-eye',
      /*attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }*/
    },
    righteye: {
      key: 'neutral-right-eye',
      /*attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }*/
    },
    lefteyebrow: {
      key: 'neutral-left-eyebrow',
      /*attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }*/
    },
    righteyebrow: {
      key: 'neutral-right-eyebrow',
      /*attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }*/
    },
    nose: {
      key: 'lying-nose',
      /*attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }*/
    },
    mouth: {
      key: 'small-smile',
      /*attr: {
        scale: 1, rotation: 0,
        x: 0, y: 0, h: 41, s: 100, l: 20, 
      }*/
    }
  })
 
  function updateEmojiComps(newValue){
    var tempEmojiComps = emojiComps
    tempEmojiComps[activeComponentType].key = newValue
    setEmojiComps(tempEmojiComps)
    setEmoji(<Emoji emojiComps={emojiComps}/>)
    //console.log(emojiComps)
  }

  var [emoji, setEmoji] = useState(<Emoji emojiComps={emojiComps}/>)
  

  const comps = {
    base: [
      { value: 'none'},
      { value: 'neutral-face' },
      { value: 'anxious-face' },
      { value: 'dotted-line-face'},
      { value: 'exploding-head-face'},
      { value: 'melting-face' },
      { value: 'cat-face' },
      { value: 'clown-face' },
      { value: 'angry-horns-face' },

    ],
    lefteye: [
      { value: 'none'},
      { value: 'neutral-left-eye' },
      { value: 'pensive-left-eye' },
      { value: 'beaming-left-eye' },
      { value: 'confounded-left-eye'},
      { value: 'expressionless-left-eye'}
    ],
    righteye: [
      { value: 'none'},
      { value: 'neutral-right-eye' },
      { value: 'pensive-right-eye' },
      { value: 'beaming-right-eye' },
      { value: 'confounded-right-eye'},
      { value: 'expressionless-right-eye'}

    ],
    lefteyebrow:[
      { value: 'none'},
      { value: 'neutral-left-eyebrow' }
    ],
    righteyebrow:[
      { value: 'none'},
      { value: 'neutral-right-eyebrow' }
    ],
    nose:[
      { value: 'none'},
      { value: 'lying-nose'},
      { value: 'cat-nose'},
      { value: 'clown-nose'},
      { value: 'disguised-nose'}
    ],
    mouth:[
      { value: 'none'},
      { value: 'small-smile'},
      { value: 'big-frown'},
      { value: 'small-frown'},
      { value: 'astonished-mouth'},
      { value: 'beaming-smile'},
      { value: 'confounded-mouth'},
      { value: 'confused-mouth'},
      { value: 'expressionless-mouth'},
      { value: 'kiss-mouth'},
      { value: 'gasping-mouth'},
      { value: 'diagonal-mouth'}
    ]

  }
  var compTypes = ['base','lefteye','righteye','lefteyebrow','righteyebrow','nose','mouth','lefthand','righthand','hat','glasses']
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
    { value: 'hat'},
    { value: 'glasses'}
  ];
  var compRadioButtons = [<BaseRadioButtons  initActive={emojiComps.base.key} emojiComps={emojiComps} data={comps['base']} onSelect={(value) => {updateEmojiComps(value)}} />,
                          <LeftEyeRadioButtons initActive={emojiComps.lefteye.key} emojiComps={emojiComps} data={comps['lefteye']} onSelect={(value) => {updateEmojiComps(value)}} />,
                          <RightEyeRadioButtons initActive={emojiComps.righteye.key} emojiComps={emojiComps} data={comps['righteye']} onSelect={(value) => {updateEmojiComps(value)}} />,
                          <LeftEyebrowRadioButtons initActive={emojiComps.lefteyebrow.key} emojiComps={emojiComps} data={comps['lefteyebrow']} onSelect={(value) => {updateEmojiComps(value)}} />,
                          <RightEyebrowRadioButtons initActive={emojiComps.righteyebrow.key} emojiComps={emojiComps} data={comps['righteyebrow']} onSelect={(value) => {updateEmojiComps(value)}} />,
                          <NoseRadioButtons initActive={emojiComps.nose.key} data={comps['nose']} emojiComps={emojiComps} onSelect={(value) => {updateEmojiComps(value)}} />,
                          <MouthRadioButtons initActive={emojiComps.mouth.key} data={comps['mouth']} emojiComps={emojiComps} onSelect={(value) => {updateEmojiComps(value)}} />
                        
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
    height: Dimensions.get('window').height*0.65,
  }
});
