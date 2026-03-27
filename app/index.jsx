import { StyleSheet, View, StatusBar } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import popularbooks from '../json/popularbooks.json';
import newestbooks from '../json/newestbooks.json';
import Toolbar from '../components/Toolbar';
import SectionTitle from '../components/SectionTitle';
import PopularBooksList from '../components/PopularBooksList';
import NewestBooksList from '../components/NewestBooksList';
import BottomNav from "../components/BottomNav";
import Drawer from "../components/Drawer";

export default function Page() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
            <SafeAreaView style={styles.container} edges={['top']}>
                <View style={styles.main}>
                    <Toolbar onMenuPress={() => setIsMenuOpen(true)} />
                    <SectionTitle title="Popular Books" />
                    <PopularBooksList data={popularbooks} />
                    <SectionTitle title="Newest" />
                    <NewestBooksList data={newestbooks} />
                    <BottomNav />
                    <Drawer isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    main: {
        flex: 1,
        justifyContent: "flex-start",
    },
});
