import React, { useState, useEffect } from 'react';
import { Dimensions, View, Text, StyleSheet} from 'react-native';
import Slider from '@react-native-community/slider';
import Emoji from './emojiComponent';

export default function ComponentEditors({emojiComps, setEmoji, activeCompType, setEmojiComps, changeValues}) {

  var [h, setH] = useState(emojiComps[activeCompType].attr.h)
  var [s, setS] = useState(emojiComps[activeCompType].attr.s)
  var [l, setL] = useState(emojiComps[activeCompType].attr.l)

  var [x, setX] = useState(emojiComps[activeCompType].attr.x)
  var [y, setY] = useState(emojiComps[activeCompType].attr.y)
  
  var [scale, setScale] = useState(emojiComps[activeCompType].attr.scale)
  var [rotation, setRotation] = useState(emojiComps[activeCompType].attr.rotation)

  useEffect(() => {
    emojiComps[activeCompType].attr = {h: h, s: s, l: l, x: x, y: y, scale: scale, rotation: rotation}
    setEmojiComps(emojiComps)
  }, [h])
  useEffect(() => {
    emojiComps[activeCompType].attr = {h: h, s: s, l: l, x: x, y: y, scale: scale, rotation: rotation}
    setEmojiComps(emojiComps)
  }, [s])
  useEffect(() => {
    emojiComps[activeCompType].attr = {h: h, s: s, l: l, x: x, y: y, scale: scale, rotation: rotation}
    setEmojiComps(emojiComps)
  }, [l])
  useEffect(() => {
    emojiComps[activeCompType].attr = {h: h, s: s, l: l, x: x, y: y, scale: scale, rotation: rotation}
    setEmojiComps(emojiComps)
  }, [x])
  useEffect(() => {
    emojiComps[activeCompType].attr = {h: h, s: s, l: l, x: x, y: y, scale: scale, rotation: rotation}
    setEmojiComps(emojiComps)
  }, [y])
  useEffect(() => {
    emojiComps[activeCompType].attr = {h: h, s: s, l: l, x: x, y: y, scale: scale, rotation: rotation}
    setEmojiComps(emojiComps)
  }, [scale])
  useEffect(() => {
    emojiComps[activeCompType].attr = {h: h, s: s, l: l, x: x, y: y, scale: scale, rotation: rotation}
    setEmojiComps(emojiComps)
  }, [rotation])

    
  console.log(activeCompType,
              emojiComps[activeCompType].key.toString(),
              emojiComps[activeCompType].attr.h.toString(),
              emojiComps[activeCompType].attr.s.toString(),
              emojiComps[activeCompType].attr.l.toString(),
              emojiComps[activeCompType].attr.x.toString(),
              emojiComps[activeCompType].attr.y.toString(),
              emojiComps[activeCompType].attr.scale.toString(),
              emojiComps[activeCompType].attr.rotation.toString())

  const onAttrChange = (attrName, newValue) => {
      
    var changedAttr = null
    switch(attrName){
      case 'h': setH(newValue); changedAttr = h;
        break;
      case 's': setS(newValue); changedAttr = s;
        break;
      case 'l': setL(newValue); changedAttr = l;
        break;
      case 'x': setX(newValue); changedAttr = x;
        break;
      case 'y': setY(newValue); changedAttr = y;
        break;
      case 'scale': setScale(newValue); changedAttr = scale;
        break;
      case 'rotation': setRotation(newValue); changedAttr = rotation;
        break;
      default: console.log('uhoh')
    }

    console.log('before updating ', activeCompType.toString(), ' ', attrName,': ','x: ', emojiComps[activeCompType].attr.x.toString(), 'y: ', emojiComps[activeCompType].attr.y.toString())
    //emojiComps[activeCompType].attr = {h: h, s: s, l: l, x: x, y: y, scale: scale, rotation: rotation}
    //emojiComps[activeCompType].attr[attrName] = newValue
    console.log('after updating ', activeCompType.toString(), ' ', attrName, ': ','x: ', emojiComps[activeCompType].attr.x.toString(), 'y: ', emojiComps[activeCompType].attr.y.toString())

    //console.log('onAttrChange: ', emojiComps);
    
    //console.log(emojiComps)

    setEmoji(<Emoji emojiComps={emojiComps}/>)
    //console.log(activeCompType)
  };

  return (
          <View style={styles.editorsContainer}>
            <View style={styles.editorContainer}>
              <Text style={styles.editorText}>Hue</Text>
              <Slider style={styles.colorSlider} 
                      value={emojiComps[activeCompType].attr.h}
                      minimumValue={0}  maximumValue={359}  step={1}
                      onValueChange={(newValue) => {onAttrChange('h', newValue)}}/>
              <Text style={styles.editorValueText}>{emojiComps[activeCompType].attr.h}</Text>
            </View>

            <View style={styles.editorContainer}>
              <Text style={styles.editorText}>Saturation</Text>
              <Slider style={styles.colorSlider}
                      value={s}
                      minimumValue={0}  maximumValue={100}  step={1}
                      onValueChange={(newValue) => {onAttrChange('s', newValue)}}/>
              <Text style={styles.editorValueText}>{emojiComps[activeCompType].attr.s}</Text>
              
            </View>

            <View style={styles.editorContainer}>
              <Text style={styles.editorText}>Lightness</Text>
              <Slider style={styles.colorSlider}
                      value={emojiComps[activeCompType].attr.l}
                      minimumValue={0}  maximumValue={100}  step={1}
                      onValueChange={(newValue) => {onAttrChange('l', newValue)}}/>
              <Text style={styles.editorValueText}>{emojiComps[activeCompType].attr.l}</Text>
            </View>
            
            <View style={styles.editorContainer}>
              <Text style={styles.editorText}>X</Text>
              <Slider style={styles.colorSlider}
                      value={emojiComps[activeCompType].attr.x}
                      minimumValue={-10}  maximumValue={10}  step={1}
                      onValueChange={(newValue) => {console.log(activeCompType, newValue), onAttrChange('x', newValue)}}/>
              <Text style={styles.editorValueText}>{emojiComps[activeCompType].attr.x}</Text>
      
            </View>
            <View style={styles.editorContainer}>
              <Text style={styles.editorText}>Y</Text>
              <Slider style={styles.colorSlider}
                      value={emojiComps[activeCompType].attr.y}
                      minimumValue={-10}  maximumValue={10}  step={1}
                      onValueChange={(newValue) => {onAttrChange('y', newValue)}}/>
              <Text style={styles.editorValueText}>{emojiComps[activeCompType].attr.y}</Text>
            </View>

            <View style={styles.editorContainer}>
              <Text style={styles.editorText}>Scale</Text>
              <Slider style={styles.colorSlider}
                      value={emojiComps[activeCompType].attr.scale}
                      minimumValue={0.5}  maximumValue={2}  step={0.1}
                      onValueChange={(newValue) => {onAttrChange('scale', Math.round(newValue * 10) / 10)}}/>
              <Text style={styles.editorValueText}>{emojiComps[activeCompType].attr.scale}</Text>
            </View>

            <View style={styles.editorContainer}>
              <Text style={styles.editorText}>Rotation</Text>
              <Slider style={styles.colorSlider}
                      value={emojiComps[activeCompType].attr.rotation}
                      minimumValue={-180}  maximumValue={180}  step={1}
                      onValueChange={(newValue) => {onAttrChange('rotation', newValue)}}/>
              <Text style={styles.editorValueText}>{emojiComps[activeCompType].attr.rotation}</Text>
            </View>

          </View>
        );

}

const styles = StyleSheet.create({
        
    colorSlider: {
        width: Dimensions.get('window').width*0.6,
        height: Dimensions.get('window').height*0.035
    },
    editorContainer: {
      flexDirection: 'row'
    },
    editorsContainer: {
      alignItems: 'center',
      borderTopColor: '#3ab52f',
      borderTopWidth: 1,
      paddingTop: 10
    },
    editorText: {
      width: Dimensions.get('window').width*0.2,
      textAlign: 'right',
      color: '#555'
    },
    editorValueText: {
      width: Dimensions.get('window').width*0.15,
      textAlign: 'left',
      color: '#555'
    }
  });