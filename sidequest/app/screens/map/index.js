import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, {Callout, Marker} from "react-native-maps";
import { useState, useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';

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

    const { data, isLoading, error } = useFetch('GET', 'api/locations', {})
    
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
                >

                                {isLoading && data.length != 0 ? (<></>) 
                                    : data.map((marker, index) => {
                                        const temp = {
                                            latitude: marker.latitude,
                                            longitude: marker.longitude,
                                            latitudeDelta: 0.05,
                                            longitudeDelta: 0.05,
                                            name: marker.name
                                        }
                                    return (<Marker key={index} coordinate={temp}>
                                        
                                        <Callout style={styles.calloutStyle}>
                                            <View>
                                                <Text>{marker.name}</Text>
                                            </View>
                                        </Callout>
                                        
                                        </Marker>);
                                })}


                </MapView>
            </View>
        </ View>
    )
}

export default Map;