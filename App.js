import React from 'react';
import { StyleSheet,View } from 'react-native';

import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';




export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Card />
      <Card/>
      <footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:50,
  },
});
