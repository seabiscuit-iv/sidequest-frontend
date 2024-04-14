import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from "react-native-maps";

import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import styles from "../../styles/styles"
import { COLORS, SIZES, FONT } from "../../constants";
import {ProfilePicture, ProfileInfo} from '../../components/';
import useFetch from '../../hooks/useFetch';

const Profile = () => {
    const router = useRouter();
    const userID = "661bdb1e872c59230f91a6a9";

    const { data, isLoading, error } = useFetch('GET', `api/locations/percent/${userID}`, {})

    if(!(isLoading || data.length == 0)){
        console.log(data);
    }

    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
                <View style={styles.profile}>
                    <ProfilePicture />
                    {/* getrequest here */}
                    <ProfileInfo percentage={data}/>
                </View>
            </SafeAreaView>
        </ View>
    )
}

export default Profile;