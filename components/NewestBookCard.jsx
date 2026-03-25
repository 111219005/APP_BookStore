import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const imageMap = {
  4: require("../img/book/book4/img_book_ysl.png"),
  5: require("../img/book/book5/img_book_tbos.png"),
  6: require("../img/book/book6/img_book_stitchedup.png"),
};

const NewestBookCard = ({ item }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/book/${item.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.newestbookcard}>
        <Image source={imageMap[item.id]} style={styles.bookpic}></Image>
        <View style={styles.rating}>
          {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              source={i < item.rating ? require("../img/icon/star/icon_star_filled.png") : require("../img/icon/star_empty/icon_star_empty.png")}
            />
          ))}
        </View>
        <Text style={styles.newestbooktitle}>{item.title}</Text>
        <Text style={styles.booksubtitle}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newestbookcard: {
    height: 279,
    width: 140,
  },
  bookpic: {
    height: 200,
    width: 140,
  },
  rating: {
    flexDirection: "row",
    gap: 4,
    width: 86,
    height: 14,
    marginTop: 16,
  },
  newestbooktitle: {
    fontSize: 16,
    color: "#131313",
    marginTop: 8,
  },
  booksubtitle: {
    fontSize: 12,
    color: "#666666",
    marginTop: 8,
  },
});

export default NewestBookCard;