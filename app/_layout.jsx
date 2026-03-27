// 不要再報錯了，抱我就好TT
import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function RootLayout() {
    return (
        <>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="book/[id]" />
                <Stack.Screen name="wishlist" />
                <Stack.Screen name="mybooks" />
            </Stack>
            <StatusBar barStyle="dark-content"/>
        </>
    );
}
