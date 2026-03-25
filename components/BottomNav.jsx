import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function BottomNav() {
    const router = useRouter();

    return (
        <View style={styles.bottomNav}>
            <View style={styles.item}>
                <TouchableOpacity style={styles.touchable} onPress={() => router.push('/index')}>
                    <Image source={require('../img/icon/home/icon_home.png')} style={{ width: 24, height: 24 }} />
                    <Text style={styles.text}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity style={styles.touchable} onPress={() => router.push('/wishlist')}>
                    <Image source={require('../img/icon/bookmark/icon_nav_bookmark.png')} style={{ width: 24, height: 24 }} />
                    <Text style={styles.text}>Bookmark</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity style={styles.touchable} onPress={() => router.push('/mybooks')}>
                    <Image source={require('../img/icon/mybook/icon_mybook.png')} style={{ width: 24, height: 24 }} />
                    <Text style={styles.text}>My Books</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bottomNav: {
        height: 56,
        flexDirection: 'row',
        marginBottom: 42,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 12,
    },
    touchable: {
        alignItems: 'center', 
        justifyContent: 'center',
    },
});