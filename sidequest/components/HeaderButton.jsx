import { usestate } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native-web'

import styles from '../styles/styles'
import { COLORS, SIZES, icons } from '../constants'

const HeaderButton = () => {
    return (
        <TouchableOpacity style={styles.headerButton}>
            <Text style={styles.headerButtonText}>
                Sidequest
            </Text>
        </TouchableOpacity>
    )
}

export default HeaderButton