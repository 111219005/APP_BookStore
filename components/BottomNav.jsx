import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useRouter, usePathname } from 'expo-router';

export default function BottomNav() {
    const router = useRouter();
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <View style={styles.bottomNav}>
            <View style={styles.item}>
                <TouchableOpacity style={styles.touchable} onPress={() => router.push('/')}>
                    <Image
                        source={isActive('/')
                            ? require('../img/icon/home_active/icon_home_actived.png')
                            : require('../img/icon/home/icon_home.png')
                        }
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={[styles.text, isActive('/') && styles.activeText]}>Home</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity style={styles.touchable} onPress={() => router.push('/wishlist')}>
                    <Image
                        source={isActive('/wishlist')
                            ? require('../img/icon/bookmark_active/icon_nav_bookmark_actived.png')
                            : require('../img/icon/bookmark/icon_nav_bookmark.png')
                        }
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={[styles.text, isActive('/wishlist') && styles.activeText]}>Wishlist</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.item}>
                <TouchableOpacity style={styles.touchable} onPress={() => router.push('/mybooks')}>
                    <Image
                        source={isActive('/mybooks')
                            ? require('../img/icon/mybook_active/icon_mybook_actived.png')
                            : require('../img/icon/mybook/icon_mybook.png')
                        }
                        style={{ width: 24, height: 24 }}
                    />
                    <Text style={[styles.text, isActive('/mybooks') && styles.activeText]}>My Books</Text>
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
        backgroundColor: '#ffffff',
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    touchable: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 12,
        color: '#131313',
        marginTop: 4,
    },
    activeText: {
        color: '#6200EE',
    },
});