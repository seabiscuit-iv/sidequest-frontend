import { usestate } from 'react'
import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import { useRouter } from 'expo-router'
import { StyleSheet } from 'react-native-web'
import MaskedView from '@react-native-community/masked-view';

import styles from '../styles/styles'
import { COLORS, SIZES, icons } from '../constants'

const ProfileInfo = ({percentage}) => {
    return (
        <>
        <View
          style={styles.profileInfo}
        >
          <MaskedView
            style={{ flex: 1 }}
            maskElement={
              <View
                style={{
                  // Transparent background mask
                  backgroundColor: '#00000000', // The '77' here sets the alpha
                  flex: 1,
                }}
              >
                <View
                  style={{
                    // Solid background as the aperture of the lens-eye.
                    backgroundColor: '#ff00ff',
                    // If you have a set height or width, set this to half
                    borderRadius: 200,
                    flex: 1,
                  }}
                />
              </View>
            }
          >
            {/* get request to percentage completed */}
            <View style={{height: (100-percentage)+"%", backgroundColor: COLORS.tertiary }} />
            <View style={{height: '100%', backgroundColor: COLORS.primary }} />
            <Text style={styles.completionText}>
                {percentage}%
            </Text>
          </MaskedView>
        </View>
        <Text style={styles.regularCenteredText}>
            Total Completion
        </Text>
        </>
    )
}

export default ProfileInfo