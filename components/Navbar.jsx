import { View, Image, StyleSheet } from 'react-native';

const Navbar = () => (
  <View style={styles.Navbar}>
    <Image source={require("../img/icon/btn_back.png")} style={styles.icon}></Image>
    <Image source={require("../img/icon/bookmark_empty/icon_bookmark.png")} style={{margin: 8}}></Image>
  </View>
);

const styles = StyleSheet.create({
  Navbar: {
    flexDirection: 'row',
    justifyContent: "space-between",
    height: 56,
    width: "100%",
    padding: 8,
    marginTop: 32,
  },
  icon: {
    width: 40,
    height: 40,
  }
});

export default Navbar;