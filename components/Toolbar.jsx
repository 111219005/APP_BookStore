import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Toolbar = ({ onMenuPress = () => {} }) => (
  <View style={styles.toolbar}>
    <TouchableOpacity onPress={onMenuPress}>
      <Image source={require("../img/icon/btn_menu.png")} style={styles.icon} />
    </TouchableOpacity>
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
    backgroundColor: "white",
  },
  icon: {
    width: 40,
    height: 40,
  }
});

export default Toolbar;
