import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from "react-native-maps";

import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import styles from "../../styles/styles"
import { COLORS, SIZES, FONT } from "../../constants";
import {QuestCard} from '../../components/';


const Home = () => {
    const router = useRouter();
    const [location, setLocation] = useState(null);  

    loc = {
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02
    };

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            console.log('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);

    if (location) {
        loc.latitude = location.coords.latitude;
        loc.longitude = location.coords.longitude;
    }

    return (
        <View style={styles.globalView}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
                <View style={styles.main}>
                    <TouchableOpacity
                    style={styles.mapContainer}
                    activeOpacity={0.75}
                    onPress = {() => {
                        router.push({ pathname: "/screens/map", params: {longitude: loc.longitude, latitude: loc.latitude} });
                        console.log("Route pushed");
                    }}>
                        <MapView
                            style={StyleSheet.absoluteFillObject}
                            pitchEnabled={false}
                            rotateEnabled={false}
                            scrollEnabled={false}
                            zoomEnabled={false}
                            region={loc} 
                            showsUserLocation
                        />
                    </TouchableOpacity>
                    <QuestCard />
                    <QuestCard />
                    <QuestCard />
                </View>
            </SafeAreaView>
        </ View>
    )
}

export default Home;