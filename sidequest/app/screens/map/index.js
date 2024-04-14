import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from "react-native-maps";
import { useState, useEffect } from 'react';

import styles from "../../../styles/styles"
import { COLORS, SIZES, FONT } from "../../../constants";

const Map = ({route}) => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const { longitude, latitude } = params;

    const LOC = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
    }
    
    return (
        <View style={styles.globalView}>
            <Stack.Screen 
                options={{
                    headerStyle: { backgroundColor: COLORS.secondary },
                    headerShadowVisible: false,
                    headerTitle: "Philadelphia",
                    headerTitleStyle: styles.headerTitleStyle
                }}
            />
            <View style={styles.mapView}>
                <MapView
                    style={StyleSheet.absoluteFillObject}
                    region={LOC}
                    showsUserLocation
                />
            </View>
        </ View>
    )
}

export default Map;