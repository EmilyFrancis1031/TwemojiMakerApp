import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function App() {

  var [activeElementAttributes, setActiveElementAttributes] = useState({scale: '1', rotation: '0', x: '0', y: '0', color1: null, color2: null, color3: null, color4: null, color5: null})
  var [activeGradientColor, setActiveGradientColor] = useState({r:'0',g:'0',b:'0'})
  var [activeHSL, setActiveHSL] = useState({hue: '0', sat: '0', val: '0'})
  var [emojiComponents, setEmojiComponents] = useState({base: null, leftEye: null, rightEye: null, leftEyebrow: null, rightEyebrow: null, nose: null, mouth: null})
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.emojiViewContainer}>
        <View style={styles.emojiView}>
          {emojiComponents['base']}
          {emojiComponents['leftEye']}
          {emojiComponents['rightEye']}
          {emojiComponents['leftEyebrow']}
          {emojiComponents['rightEyebrow']}
          {emojiComponents['nose']}
          {emojiComponents['mouth']}
        </View>
      </View>
      <View style={styles.emojiEditorsContainer}>

      </View>
      <View style={styles.emojiComponentsContainer}>
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
    backgroundColor: '#eee',
    height: Dimensions.get('window').height*0.4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  emojiView: {
    width: Dimensions.get('window').width*0.5,
    height: Dimensions.get('window').width* 0.5,
    backgroundColor: 'rgba(130,131,130,0.1)',
    borderRadius: 20,
    marginTop: Dimensions.get('window').width*0.05,
  },
  emojiEditorsContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.325,
    backgroundColor: '#ddd',

  },
  emojiComponentsContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.33,
    backgroundColor: '#ccc',

  },


});
