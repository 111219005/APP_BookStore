import { View, Text, StyleSheet } from 'react-native';

const SectionTitle = ({ title }) => (
  <View style={styles.word}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  word: {
    width: "auto",
    marginLeft: 20,
    paddingTop: 8,
    alignItems: "flex-start",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#131313",
  },
});

export default SectionTitle;