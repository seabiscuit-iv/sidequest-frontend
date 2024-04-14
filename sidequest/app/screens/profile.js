import { Stack, useRouter } from 'expo-router';
import { SafeAreaView, ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from "react-native-maps";

import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';

import styles from "../../styles/styles"
import { COLORS, SIZES, FONT } from "../../constants";
import {ProfilePicture, ProfileInfo} from '../../components/';


const Profile = () => {
    const router = useRouter();

    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.secondary }}>
                <View style={styles.profile}>
                    <ProfilePicture />
                    {/* getrequest here */}
                    <ProfileInfo percentage={55}/>
                </View>
            </SafeAreaView>
        </ View>
    )
}

export default Profile;