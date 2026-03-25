import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Toolbar from '../components/Toolbar';
import BottomNav from '../components/BottomNav';

export default function WishlistScreen() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    <Toolbar />
    <View style={styles.screen}>
      <Text>Wishlist</Text>
    </View>
    <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 32,
    backgroundColor: 'white',
  },
});