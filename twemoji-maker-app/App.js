import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.emojiViewContainer} />
      <View style={styles.emojiEditorsContainer} />
      <View style={styles.emojiComponentsContainer} />


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
    height: Dimensions.get('window').height*0.35,
  },
  emojiEditorsContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.35,
  },
  emojiComponentsContainer:{
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height*0.35,
  }

});
