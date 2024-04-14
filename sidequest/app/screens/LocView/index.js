import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView, {Callout, Marker} from "react-native-maps";
import { useState, useEffect } from 'react';
import useFetch from '../../../hooks/useFetch';
import * as Location from 'expo-location';


import styles from "../../../styles/styles"
import { COLORS, SIZES, FONT } from "../../../constants";

const LocView = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    const [location, setLocation] = useState(null);  
    const { longitude, latitude, name, id, points, userLong, userLat } = params;
    
    const userID = "661bdb1e872c59230f91a6a9";

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

    const LOC = {
        latitude: latitude,
        longitude: longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    }

    // console.log("userlat " + userLat);
    // console.log("userlong " + userLong);

    const api_url = 'api/users/getDistance/' + userLat + '/' + userLong + '/' + id
    const { data, isLoading, error } = useFetch('GET', api_url);

    if(error) {
        console.log(error);
    }

    const Claim = () => {
        console.log(data.meters);
        if(data.meters <= 10000) {
            // useFetch('PATCH', "api/users/updateUserLocation/" + userID + "/" + id, {});
            alert("Mission Successfully Completed");
        } 
        else {
            alert("Not close enough to location");
        }
    };

    return (
        <View style={{backgroundColor: COLORS.secondary, flex: 1}}>
            <View style={styles.mapPreviewContainer}>
                <Stack.Screen 
                    options={{
                        headerStyle: { backgroundColor: COLORS.secondary },
                        headerShadowVisible: false,
                        headerTitle: "",
                        headerTitleStyle: styles.headerTitleStyle
                    }}
                />
                <View style={styles.mapView}>
                    <MapView
                        style={StyleSheet.absoluteFillObject}
                        region={LOC}
                        pitchEnabled={false}
                        rotateEnabled={false}
                        scrollEnabled={false}
                        zoomEnabled={false}
                    >
                        <Marker coordinate={LOC}></Marker>
                    </MapView>
                </View>
            </ View>
            <View style={styles.main}>
                <Text style={styles.boldTextCentered(35)}>{name}</Text>
                <Text style={styles.regularTextCentered(25)}>{`Points: ${points}`}</Text>
                <TouchableOpacity style={styles.claimButton} onPress={Claim}>
                    <Text style={{color: COLORS.lightWhite, fontFamily: FONT.bold, fontSize: 25}}>
                        Claim
                    </Text>
                </TouchableOpacity>
            </ View>
        </View>
        
    )
}


export default LocView;
