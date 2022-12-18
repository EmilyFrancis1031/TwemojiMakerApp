import React, { useState } from 'react';
import { Dimensions, View, ScrollView, Text, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import SVG, {G, Path, Ellipse} from 'react-native-svg'
import { NeutralFace } from '../bases/baseComps';


export default function ComponentSelectors({ data, onSelect, initActive }) {
  const [userOption, setUserOption] = useState(initActive);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  const getNewEditableEmojiComponent = (compKey) => {
    var newComponent = null;
    switch (compKey) {
      case 'base': newComponent = <NeutralFace type='base' key='neutral-face'/>;
        break;
      case 'lefteyebrow': 
      newComponent = <G>
                    <Path fill="rgb(102,69,0)" d="M5.999 13.5a1 1 0 0 1-.799-1.6c3.262-4.35 7.616-4.4 7.8-4.4a1 1 0 0 1 .004 2c-.155.002-3.568.086-6.204 3.6a.998.998 0 0 1-.801.4z"/>
                    <Path fill="#ddd"d="M5.999 13.5m24.002 0a.998.998 0 0 1-.801-.4c-2.641-3.521-6.061-3.599-6.206-3.6a1.002 1.002 0 0 1-.991-1.005A.997.997 0 0 1 23 7.5c.184 0 4.537.05 7.8 4.4a1 1 0 0 1-.799 1.6z"/>
                    </G>;
        break;
      case 'righteyebrow': 
      newComponent = <G>
                    <Path fill="#ddd" d="M5.999 13.5a1 1 0 0 1-.799-1.6c3.262-4.35 7.616-4.4 7.8-4.4a1 1 0 0 1 .004 2c-.155.002-3.568.086-6.204 3.6a.998.998 0 0 1-.801.4z"/>
                    <Path fill="rgb(102,69,0)"d="M5.999 13.5m24.002 0a.998.998 0 0 1-.801-.4c-2.641-3.521-6.061-3.599-6.206-3.6a1.002 1.002 0 0 1-.991-1.005A.997.997 0 0 1 23 7.5c.184 0 4.537.05 7.8 4.4a1 1 0 0 1-.799 1.6z"/>
                    </G>;
        break;
      case 'lefteye': 
      newComponent =  <G >
                        <Ellipse cx="11.5" cy="16.5" fill="rgb(102,69,0)" rx="2.5" ry="3.5"/>
                        <Ellipse cx="24.5" cy="16.5" fill="#ddd" rx="2.5" ry="3.5"/>
                        </G>;
        break;
      case 'righteye': 
      newComponent = <G>
                      <Ellipse cx="11.5" cy="16.5" fill="#ddd" rx="2.5" ry="3.5"/>
                      <Ellipse cx="24.5" cy="16.5" fill="rgb(102,69,0)" rx="2.5" ry="3.5"/>
                    </G>;
        break;
      case 'nose': 
      newComponent = <G>
                      <Path fill="#FFDC5D" d="M33 29.5c0-2.485-3.134-6.5-7-6.5l-.059.003C25.441 13.749 21.722 0 18 0c-3.657 0-7.311 13.691-7.912 23.004c-.028 0-.06-.004-.088-.004c-3.866 0-7 4.015-7 6.5c0 2.326 5.257 3.364 9.21 5.128C13.472 35.724 15.342 36 18 36c2.253 0 3.941-.267 5.173-1.081C27.17 32.974 33 31.95 33 29.5z"/>
                      <Path fill="#EF9645" d="M26 30c.544-.099 2.104-2.421 2.104-4.077c0-2.061-.55-2.667-1.224-2.846A5.579 5.579 0 0 0 26 23c0 1 .137 2 .137 3.278c0 2.722-.681 3.82-.137 3.722zM7.789 25.923c0 1.656 1.561 3.979 2.104 4.077c.544.098-.137-1-.137-3.722c0-1.275.136-2.274.137-3.271c-.349.007-.691.05-1.026.118c-.606.229-1.078.889-1.078 2.798z"/>
                      <Path fill="#662113" d="M9.008 31.377c-1.562-.455-3.049-.216-3.741.503c1.804.892 4.381 1.648 6.618 2.609l.001-.002c.337-1.155-.951-2.549-2.878-3.11zm17.984 0c-1.927.561-3.215 1.955-2.878 3.11l.002.004c2.237-.961 4.814-1.718 6.617-2.611c-.691-.719-2.179-.958-3.741-.503z"/>
                    </G>;
        break;
      case 'mouth': 
      newComponent = <G>
                      <Path fill="#E75A70" d="M29 12c-4.688-3.515-6-6-8-6s-2 1-3 1s-1-1-3-1s-3.313 2.485-8 6c-4 3-7 3-7 5s5 6 8 9c2 2 5 4 10 4s8-2 10-4c3-3 8-7 8-9s-3-2-7-5z"/>
                      <Path fill="#662113" d="M28.389 15.5C23.963 14.035 21 13.417 18 13.417s-5.962.618-10.389 2.083C3.833 16.75 1 16.167 1 17c0 .834 9 5 17 5s17-4.166 17-5c0-.833-2.834-.25-6.611-1.5z"/>
                      <Path fill="#FFF" d="M28.389 15.5C23.963 14.035 21 13.417 18 13.417s-5.962.618-10.389 2.083c-3.624 1.199-6.371.715-6.59 1.408c2.454.385 9.119-.644 16.979-.644s14.524 1.029 16.979.644c-.219-.693-2.967-.209-6.59-1.408z"/>
                    </G>;
        break;
      case 'lefthand':
      newComponent = <G>
                      <Path transform="scale(1,-1) rotate(135) translate(-35,-19)" transform-origin="center" fill="#F4900C" d="M26.503 27.371s.997-.721.165-1.614c-.832-.893-1.621.052-1.621.052L20.9 29.675c-.069-.205-.459-.743-.55-.947l5.755-5.366s.998-.721.164-1.615c-.832-.892-1.622.051-1.622.051l-5.413 5.046c-.125-.158-.461-.54-.594-.698l6.276-5.85s.997-.722.164-1.614c-.832-.893-1.621.051-1.621.051l-6.278 5.848c-.15-.145-.612-.609-.764-.746l5.866-5.468s.996-.722.164-1.614c-.833-.893-1.621.051-1.621.051l-6.203 5.781l-.497.464l-.222.207s-.538.744-1.087.179l1.842-4.158s.58-1.074-.493-1.655c-1.075-.581-1.655.493-1.655.493l-1.668 2.758c-.663 1.093-1.349 2.178-2.159 3.167a7.328 7.328 0 0 0 10.673 9.993l.447-.418l6.699-6.244z"/>
                      <Path transform="scale( 1,1) rotate(-45) translate(-10,6)" transform-origin="center" fill="#ddd"     d="M26.503 27.371s.997-.721.165-1.614c-.832-.893-1.621.052-1.621.052L20.9 29.675c-.069-.205-.459-.743-.55-.947l5.755-5.366s.998-.721.164-1.615c-.832-.892-1.622.051-1.622.051l-5.413 5.046c-.125-.158-.461-.54-.594-.698l6.276-5.85s.997-.722.164-1.614c-.832-.893-1.621.051-1.621.051l-6.278 5.848c-.15-.145-.612-.609-.764-.746l5.866-5.468s.996-.722.164-1.614c-.833-.893-1.621.051-1.621.051l-6.203 5.781l-.497.464l-.222.207s-.538.744-1.087.179l1.842-4.158s.58-1.074-.493-1.655c-1.075-.581-1.655.493-1.655.493l-1.668 2.758c-.663 1.093-1.349 2.178-2.159 3.167a7.328 7.328 0 0 0 10.673 9.993l.447-.418l6.699-6.244z"/>
                    </G>
      break;
      case 'righthand':
        newComponent = <G>
           <Path transform="scale(1,-1) rotate(135) translate(-35,-19)" transform-origin="center" fill="#ddd" d="M26.503 27.371s.997-.721.165-1.614c-.832-.893-1.621.052-1.621.052L20.9 29.675c-.069-.205-.459-.743-.55-.947l5.755-5.366s.998-.721.164-1.615c-.832-.892-1.622.051-1.622.051l-5.413 5.046c-.125-.158-.461-.54-.594-.698l6.276-5.85s.997-.722.164-1.614c-.832-.893-1.621.051-1.621.051l-6.278 5.848c-.15-.145-.612-.609-.764-.746l5.866-5.468s.996-.722.164-1.614c-.833-.893-1.621.051-1.621.051l-6.203 5.781l-.497.464l-.222.207s-.538.744-1.087.179l1.842-4.158s.58-1.074-.493-1.655c-1.075-.581-1.655.493-1.655.493l-1.668 2.758c-.663 1.093-1.349 2.178-2.159 3.167a7.328 7.328 0 0 0 10.673 9.993l.447-.418l6.699-6.244z"/>
           <Path transform="scale( 1,1) rotate(-45) translate(-10,6)" transform-origin="center" fill="#F4900C"     d="M26.503 27.371s.997-.721.165-1.614c-.832-.893-1.621.052-1.621.052L20.9 29.675c-.069-.205-.459-.743-.55-.947l5.755-5.366s.998-.721.164-1.615c-.832-.892-1.622.051-1.622.051l-5.413 5.046c-.125-.158-.461-.54-.594-.698l6.276-5.85s.997-.722.164-1.614c-.832-.893-1.621.051-1.621.051l-6.278 5.848c-.15-.145-.612-.609-.764-.746l5.866-5.468s.996-.722.164-1.614c-.833-.893-1.621.051-1.621.051l-6.203 5.781l-.497.464l-.222.207s-.538.744-1.087.179l1.842-4.158s.58-1.074-.493-1.655c-1.075-.581-1.655.493-1.655.493l-1.668 2.758c-.663 1.093-1.349 2.178-2.159 3.167a7.328 7.328 0 0 0 10.673 9.993l.447-.418l6.699-6.244z"/>
          </G>
        break;
      case 'hat':
        newComponent = <G>
          <Path transform="translate(0,10)" fill="#664500" d="M32 6.13c-1.19 1.441-3.182 1.951-5.076 2.121C26.606 6.713 25.241 1 22.5 1c-2.403 0-3.269 1.091-4.5 1.091C16.769 2.091 15.903 1 13.5 1c-2.741 0-4.106 5.713-4.424 7.251C7.182 8.081 5.19 7.57 4 6.13C1.847 3.524-1 5.444.442 8.304C2.72 12.821 8.23 16 18 16c9.769 0 15.279-3.179 17.558-7.696C37 5.444 34.153 3.524 32 6.13z"/>
          <Path transform="translate(0,10)" fill="#825D0E" d="M21.5 3c-1.869 0-2.543.964-3.5.964c-.957 0-1.631-.964-3.5-.964C12.037 3 11 9.75 11 9.75S12.282 12 18 12c5.719 0 7-2.25 7-2.25S23.963 3 21.5 3z"/>
          <Path transform="translate(0,10)" fill="#664500" d="M11 6s2.074 2 7 2c4.927 0 7-2 7-2v2s-2.222 2-7 2c-4.778 0-7-2-7-2V6z"/>
          </G>
      break;
      default:  newComponent = null;
   }
   return newComponent
  }
  return (
    <View style={styles.emojiComponentsSelectorsContainer}>
      <ScrollView horizontal={true} style={{flexDirection:'row', width: Dimensions.get('window').width}}>
        {data.map((item) => {
          //console.log(item.value)
          return (
            <TouchableOpacity key={item.value}
              style={item.value === userOption ? styles.selected : styles.unselected}
              onPress={() => selectHandler(item.value)}>
              <SVG height='40' width='40' viewBox='0 0 36 36'>{getNewEditableEmojiComponent(item.value)}</SVG>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  emojiComponentsSelectorsContainer:{
    width:Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.1,
    borderTopColor: 'rgba(106,108,110, 0.3)',
    borderTopWidth: 2,
    paddingTop: 5
  },
  unselected: {
      borderColor: 'transparent',
      borderWidth: 2,
      margin: 5,
      padding: 10,
      borderRadius: 10,
      width: Dimensions.get('window').height*0.075,
      height: Dimensions.get('window').height*0.075,
      justifyContent: 'center',
      alignItems: 'center'
    },
  selected: {
      borderColor: 'cornflowerblue',
      borderWidth: 2,
      margin: 5,
      padding: 10,
      borderRadius: 10,
      width: Dimensions.get('window').height*0.075,
      height: Dimensions.get('window').height*0.075,
      justifyContent: 'center',
      alignItems: 'center'
    },
  });