import { View, Image, StyleSheet } from 'react-native';

const Toolbar = () => (
  <View style={styles.toolbar}>
    <Image source={require("../img/icon/btn_menu.png")} style={styles.icon}></Image>
    <Image source={require("../img/icon/btn_search.png")}></Image>
  </View>
);

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    height: 56,
    width: "100%",
    padding: 8,
  },
  icon: {
    width: 40,
    height: 40,
  }
});

export default Toolbar;