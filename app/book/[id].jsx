import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams } from 'expo-router';
import popularbooks from '../../json/popularbooks.json';
import newestbooks from '../../json/newestbooks.json';
import BottomNav from '../../components/BottomNav';
import Navbar from '../../components/Navbar';

export default function BookDetail() {
  const { id } = useLocalSearchParams();
  const allBooks = [...popularbooks, ...newestbooks];
  const book = allBooks.find(b => b.id.toString() === id);

  const BOOK_IMAGES = {
    "1": require('../../img/book/book1/img_book_fashinopolis.png'),
    "2": require('../../img/book/book2/img_book_chanel.png'),
    "3": require('../../img/book/book3/img_book_calligraphy.png'),
    "4": require('../../img/book/book4/img_book_ysl.png'),
    "5": require('../../img/book/book5/img_book_tbos.png'),
    "6": require('../../img/book/book6/img_book_stitchedup.png'),
  };

  if (!book) {
    return (
      <View style={styles.container}>
        <Text>Book not found</Text>
      </View>
    );
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <Navbar />
        <View style={styles.container}>
          <Image
            source={BOOK_IMAGES[book.id.toString()]}
            style={styles.bookImage}
          />
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.subtitle}>{book.subtitle}</Text>
          <View style={styles.rate}>
            <View style={styles.ratingstar}>
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  source={i < book.rating ? require("../../img/icon/star/icon_star_filled.png") : require("../../img/icon/star_empty/icon_star_empty.png")}
                />
              ))}
            </View>
            <Text style={styles.rateText}>
              {book.rating}.0
              <Text style={{ color: '#666' }}> / 5.0</Text>
            </Text>
          </View>
          <View style={{ width: 320, marginTop: 16 }}>
            <Text style={styles.descriptionText}>{book.description}</Text>
          </View>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buttonText}>BUY NOW FOR ${book.price}</Text>
          </TouchableOpacity>
        </View>
        <BottomNav />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 32,
  },
  bookImage: {
    width: 210,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 10,
  },
  ratingstar: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    width: 86,
    height: 14,
    marginTop: 8,
    bottom: 2,
  },
  rate: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    width: 147,
    height: 16,
    marginTop: 8,
  },
  rateText: {
    fontSize: 14,
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#131313',
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 4,
    marginTop: 28,
    width: 190,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
    lineHeight: 16,
  },
});
