import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, View, Text, StyleSheet } from 'react-native';
import MapView from "react-native-maps";

import styles from "../styles/styles"
import { COLORS, SIZES, FONT } from "../constants";
import {Map, Arrow, HeaderButton} from "../components"

const Home = () => {
    const router = useRouter();

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.secondary }}>
            <Stack.Screen 
                options={{
                    headerShown: false
                }}
            />
            <View style={styles.mapContainer}>
                <MapView style={StyleSheet.absoluteFillObject}>
                    <HeaderButton />
                </MapView>
            </View>
        </View>
    )
}

export default Home;