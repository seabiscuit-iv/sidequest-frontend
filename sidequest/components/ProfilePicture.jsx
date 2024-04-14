import { usestate } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native-web'

import styles from '../styles/styles'
import { COLORS, SIZES, icons } from '../constants'

const ProfilePicture = () => {
    return (
        <View style={styles.profilePicStyle}>
            <Image 
                source={icons.user}
                resizeMode="contain"
                style={styles.btnImage}
            />
        </View>
    )
}

export default ProfilePicture