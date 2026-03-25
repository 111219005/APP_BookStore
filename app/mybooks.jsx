import { View, Text, StyleSheet, StatusBar } from 'react-native';
import BottomNav from '../components/BottomNav';
import Toolbar from '../components/Toolbar';

export default function MyBooksScreen() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
    <Toolbar />
    <View style={styles.screen}>
      <Text>My Books</Text>
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