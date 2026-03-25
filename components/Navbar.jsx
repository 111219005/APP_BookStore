import { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const Navbar = () => {
  const router = useRouter();
  
  const [isBookmarked, setIsBookmarked] = useState(false);

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <View style={styles.Navbar}>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Image
          source={require("../img/icon/btn_back.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={toggleBookmark}>
        <Image 
          source={
            isBookmarked 
              ? require("../img/icon/bookmark_active/icon_nav_bookmark_actived.png")
              : require("../img/icon/bookmark_empty/icon_bookmark.png")
          } 
          style={{ margin: 8 }}
        />
      </TouchableOpacity>
    </View>
  );
};

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