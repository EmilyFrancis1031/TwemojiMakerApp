import * as React from "react";
import SVG from 'react-native-svg';
import { StyleSheet, View, Dimensions } from 'react-native';
import getNewEmojiComponent from "../scripts/getNewEmojiComponent";


export default function Emoji(emojiComps){
var emojiComps = emojiComps['emojiComps']

var base = getNewEmojiComponent(emojiComps.base.key,  emojiComps.base.attr) ?? null
var lefteye = getNewEmojiComponent(emojiComps.lefteye.key,  emojiComps.lefteye.attr) ?? null

return (
	// Using react-natives built in components.
    <View style={styles.emojiView}>
        <SVG height='156' width='156' viewBox='0 0 36 36'>
            {base}
            {lefteye}
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