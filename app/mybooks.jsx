import { useState } from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomNav from '../components/BottomNav';
import Toolbar from '../components/Toolbar';
import Drawer from '../components/Drawer';

export default function MyBooksScreen() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    <SafeAreaView style={styles.container} edges={['top']}>
      <Toolbar onMenuPress={() => setIsMenuOpen(true)} />
      <View style={styles.screen}>
        <Text>My Books</Text>
      </View>
      <BottomNav />
      <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
