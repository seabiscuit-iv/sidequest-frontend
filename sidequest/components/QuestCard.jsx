import { usestate } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native-web'

import styles from '../styles/styles'
import { COLORS, SIZES, icofns } from '../constants'

const QuestCard = () => {
    return (
        <TouchableOpacity style={styles.questCard}>
            <Text style={styles.mediumText(20)}>
                This is a quest
            </Text>
            <Text style={styles.regularText(18)}>
                This is a quest
            </Text>
        </TouchableOpacity>
    )
}

export default QuestCard