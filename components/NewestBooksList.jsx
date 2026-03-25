import { FlatList, StyleSheet, View } from 'react-native';
import NewestBookCard from './NewestBookCard';

const NewestBooksList = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <NewestBookCard item={item} />}
    keyExtractor={item => item.id.toString()}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
    contentContainerStyle={{ paddingLeft: 20, paddingRight: 20 }}
    style={styles.newestbooks}
  />
);

const styles = StyleSheet.create({
  newestbooks: {
    height: 279,
    width: "auto",
    marginTop: 16,
  },
});

export default NewestBooksList;