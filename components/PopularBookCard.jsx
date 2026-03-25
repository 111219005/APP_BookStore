import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const imageMap = {
  1: require("../img/book/book1/img_book_fashinopolis.png"),
  2: require("../img/book/book2/img_book_chanel.png"),
  3: require("../img/book/book3/img_book_calligraphy.png"),
};

const PopularBookCard = ({ item }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/book/${item.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.popularbookcard}>
        <Image source={imageMap[item.id]} style={styles.bookpic}></Image>
        <Text style={styles.popularbooktitle}>{item.title}</Text>
        <Text style={styles.booksubtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  popularbookcard: {
    height: 256,
    width: 140,
  },
  bookpic: {
    height: 200,
    width: 140,
  },
  popularbooktitle: {
    fontSize: 16,
    color: "#131313",
    marginTop: 16,
  },
  booksubtitle: {
    fontSize: 12,
    color: "#666666",
    marginTop: 8,
  },
});

export default PopularBookCard;