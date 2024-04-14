import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, { Marker } from "react-native-maps";
import axios from 'axios';

import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import styles from "../../styles/styles"
import { COLORS, SIZES, FONT } from "../../constants";
import {QuestCard} from '../../components/';

import useFetch from "../../hooks/useFetch"

const Home = () => {
    const router = useRouter();
    const [location, setLocation] = useState(null);  
    const userID = "661bdb1e872c59230f91a6a9";

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
    
    const { data:data, isLoading:isLoading, error:error } = useFetch('GET', `api/users/getWeeklyQuests/${userID}`, {})
    const { data:allData, isLoading:isLoading2, error:error2 } = useFetch('GET', `api/users/getRemainingQuests/${userID}`, {})

    
    // if(isLoading && data.length != 0) {
    //     console.log(data);
    // }

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
                        >
                            {isLoading2 || allData.length == 0 ? (<></>) 
                                : allData.map((marker, index) => {
                                    const temp = {
                                        latitude: marker.latitude,
                                        longitude: marker.longitude,
                                        latitudeDelta: 0.05,
                                        longitudeDelta: 0.05,
                                        name: marker.name
                                    };
                                    return (<Marker key={index} coordinate={temp} />);
                                })}

                        </MapView>
                    </TouchableOpacity>
                    <QuestCard name={isLoading || data.length == 0 ? "" : data[0].name} location={isLoading || data.length == 0 ? "" : data[0].address} points={isLoading || data.length == 0 ? "" : data[0].points}
                        onPress={() => {router.push({ pathname: "/screens/LocView", params: {longitude: data[0].longitude, latitude: data[0].latitude, name: data[0].name, id: data[0]._id, points: data[0].points, userLong: loc.longitude, userLat: loc.latitude} });
                        }}
                    />
                    <QuestCard name={isLoading || data.length == 0 ? "" : data[1].name} location={isLoading || data.length == 0 ? "" : data[1].address} points={isLoading || data.length == 0 ? "" : data[1].points}
                        onPress={() => {router.push({ pathname: "/screens/LocView", params: {longitude: data[1].longitude, latitude: data[1].latitude, name: data[1].name, id: data[1]._id, points: data[1].points, userLong: loc.longitude, userLat: loc.latitude}} );
                        }}
                    />
                    <QuestCard name={isLoading || data.length == 0 ? "" : data[2].name} location={isLoading || data.length == 0 ? "" : data[2].address} points={isLoading || data.length == 0 ? "" : data[2].points}
                        onPress={() => {router.push({ pathname: "/screens/LocView", params: {longitude: data[2].longitude, latitude: data[2].latitude, name: data[2].name, id: data[2]._id, points: data[2].points, userLong: loc.longitude, userLat: loc.latitude}} );
                        }}
                    />
                </View>
            </SafeAreaView>
        </ View>
    )
}

export default Home;