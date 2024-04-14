import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import MapView from "react-native-maps";

import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import axios from 'axios';

import styles from "../../styles/styles"
import { COLORS, SIZES, FONT } from "../../constants";
import {QuestCard} from '../../components/';
import useFetch from '../../hooks/useFetch';


const Quests = () => {
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

    const { data, isLoading, error } = useFetch('GET', 'api/locations', {})

    // if(!isLoading && data.length != 0) {
    //     console.log(data[0].address);
    // }

    return (
        <View style={styles.globalView}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
                <View>
                    {isLoading && data.length != 0 ? (
                        <Text>Still working</Text>
                    ) : <FlatList 
                        data = {data}
                        renderItem = {(item) => (
                            <QuestCard 
                              name = {item.item.name}
                              location = {item.item.address}
                              points = {item.item.points}
                            />
                        )}
                        keyExtractor={item => item?._id}
                    />}
                </View>
            </SafeAreaView>
        </ View>
    )
}

export default Quests;