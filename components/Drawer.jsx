import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image } from 'react-native';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const Drawer = ({ isOpen, onClose }) => {
    const router = useRouter();

    if (!isOpen) return null;

    return (
        <View style={styles.overlay}>
            <View style={styles.drawer}>
                <Image source={require("../img/avatar/img_avatar.png")} style={{ marginTop: 72 }} />
                <Text style={styles.title}>May</Text>
                <View style={styles.line} />

                <TouchableOpacity onPress={() => { router.push('/'); onClose(); }}>
                    <View style={[styles.item, { marginTop: 8 }]}>
                        <Image source={require("../img/icon/home/icon_home.png")}/>
                        <Text style={styles.itemText}>Home</Text>
                    </View>                    
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { router.push('/'); onClose(); }}>
                    <View style={styles.item}>
                        <Image source={require("../img/icon/account/icon_account.png")}/>
                        <Text style={styles.itemText}>Account</Text>
                    </View>                    
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { router.push('/'); onClose(); }}>
                    <View style={styles.item}>
                        <Image source={require("../img/icon/setting/icon_settings.png")}/>
                        <Text style={styles.itemText}>Setting</Text>
                    </View>                    
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.backdrop} onPress={onClose} activeOpacity={1} />
        </View>
    );
};

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 999,
        flexDirection: 'row',
    },
    backdrop: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    drawer: {
        width: 300,
        height: '100%',
        backgroundColor: 'white',
        paddingLeft: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 16,
    },
    line: {
        height: 1,
        backgroundColor: '#EDEDEF',
        width: 300,
        left: -16,
        marginTop: 16,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 32,
        paddingVertical: 16,
    },
    itemText: {
        fontSize: 14,
    },
});

export default Drawer;