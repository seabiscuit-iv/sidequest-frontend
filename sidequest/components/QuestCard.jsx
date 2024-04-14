import { usestate } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native-web'

import styles from '../styles/styles'
import { COLORS, SIZES, icofns } from '../constants'

const QuestCard = ({name, location, points, onPress}) => {
    return (
        <TouchableOpacity style={styles.questCard} onPress={onPress}>
            <View style={{flex: 5}}>
                <Text style={styles.mediumText(20)}>
                    {name}
                </Text>
                <Text style={styles.regularText(18)}>
                    {location}
                </Text>
            </View>
            <View style={{flex: 1, marginLeft: 25, justifyContent:'center'}}>
                <Text style={styles.boldTextCentered(32)}>{points}</Text>
                <Text style={styles.regularTextCentered(15)}>Points</Text>
            </View>
        </TouchableOpacity>
    )
}

export default QuestCard