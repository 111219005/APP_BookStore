import { FlatList, StyleSheet, View } from 'react-native';
import PopularBookCard from './PopularBookCard';

const PopularBooksList = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <PopularBookCard item={item} />}
    keyExtractor={item => item.id.toString()}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
    contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
    style={styles.popularbooks}
  />
);

const styles = StyleSheet.create({
  popularbooks: {
    height: 256,
    width: "auto",
    marginTop: 16,
  },
});

export default PopularBooksList;