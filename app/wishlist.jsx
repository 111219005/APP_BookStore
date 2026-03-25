import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

export default function WishlistScreen() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    <View style={styles.screen}>
      <Text>Wishlist Screen</Text>
    </View>
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