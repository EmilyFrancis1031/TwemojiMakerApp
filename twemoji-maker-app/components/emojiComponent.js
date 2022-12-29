import * as React from "react";
import SVG from 'react-native-svg';
import { StyleSheet, View, Dimensions } from 'react-native';
import getNewEmojiComponent from "../scripts/getNewEmojiComponent";


export default function Emoji(emojiComps){
var emojiComps = emojiComps['emojiComps']

var base = getNewEmojiComponent(emojiComps.base.key,  emojiComps.base.attr) ?? null
var lefteye = getNewEmojiComponent(emojiComps.lefteye.key,  emojiComps.lefteye.attr) ?? null
var lefteyebrow = getNewEmojiComponent(emojiComps.lefteyebrow.key,  emojiComps.lefteyebrow.attr) ?? null
var righteye = getNewEmojiComponent(emojiComps.righteye.key,  emojiComps.righteye.attr) ?? null
var righteyebrow = getNewEmojiComponent(emojiComps.righteyebrow.key,  emojiComps.righteyebrow.attr) ?? null
var nose = getNewEmojiComponent(emojiComps.nose.key,  emojiComps.nose.attr) ?? null
var mouth = getNewEmojiComponent(emojiComps.mouth.key,  emojiComps.mouth.attr) ?? null




return (
	// Using react-natives built in components.
    <View style={styles.emojiView}>
        <SVG height='156' width='156' viewBox='0 0 36 36'>
            {base}
            {righteye}
            {righteyebrow}
            {mouth}
            {nose}
            {lefteye}
            {lefteyebrow}
        </SVG>
    </View>
);
}

const styles = StyleSheet.create({
    emojiView: {
        width: Dimensions.get('window').height*0.2,
        height: Dimensions.get('window').height*0.2,
      },
});