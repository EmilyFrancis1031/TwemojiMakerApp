import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { NeutralFace } from './components/baseEmojis/baseEmojis';
import SVG from 'react-native-svg'

export default function App() {

  var [activeElementAttributes, setActiveElementAttributes] = useState({scale: '1', rotation: '0', x: '0', y: '0', r: '0', g: '0', b: '0'})
  var [activeGradientColor, setActiveGradientColor] = useState({r:'0',g:'0',b:'0'})
  var [activeHSL, setActiveHSL] = useState({hue: '0', sat: '0', val: '0'})
  var [emojiComponents, setEmojiComponents] = useState({base: null, leftEye: null, rightEye: null, leftEyebrow: null, rightEyebrow: null, nose: null, mouth: null})
  var [colorEditorSelectors, setColorEditorSelectors] = useState({selector1: null})
  
  const setNewActiveElementAttribute = (attrName, newValue) => {
    var tempActiveElementAttributes = activeElementAttributes;
    tempActiveElementAttributes[attrName] = newValue.toString();
    setActiveElementAttributes(tempActiveElementAttributes)
  }

  const setNewEmojiComponent = (emojiCompType, newComponent) => {
    var tempEmojiComponents = emojiComponents;
    tempEmojiComponents[emojiCompType] = newComponent;
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.emojiViewContainer}>
        <View style={styles.emojiView}>
          <SVG height='156' width='156' viewBox='0 0 36 36'>
          <NeutralFace/>

            {emojiComponents['base']}
            {emojiComponents['leftEye']}
            {emojiComponents['rightEye']}
            {emojiComponents['leftEyebrow']}
            {emojiComponents['rightEyebrow']}
            {emojiComponents['nose']}
            {emojiComponents['mouth']}
        
          </SVG>
        </View>
      </View>

      <View style={styles.emojiComponentSelectorContainer}>

      </View>

      <View style={styles.emojiComponentsContainer}>
      </View>
     
      <View style={styles.emojiEditorsContainer}>
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
  emojiEditors:{
    
  },
  emojiComponentsContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.3,
    backgroundColor: '#eee'
  },
  emojiComponents:{
   
  },
  emojiComponentSelectorContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.1,
    backgroundColor: '#ccc'
  }

});
