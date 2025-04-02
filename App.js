import { StyleSheet, Text, View, Image } from 'react-native';

import Header from './components/Header';
import Card from './components/Card';
import { Overlay } from 'react-native-elements';




export default function Page() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
      <Card/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
