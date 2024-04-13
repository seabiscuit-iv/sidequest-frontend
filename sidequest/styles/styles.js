import { StyleSheet } from "react-native";

import { COLORS, FONT } from "../constants";


const styles = StyleSheet.create({
    regularText: {
        fontFamily: FONT.regular,
        fontSize: 20
    },
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center'
    },
    mapContainer: {
        flex: 1,
        overflow: 'hidden',
    }, 
    headerButton: {
        backgroundColor: COLORS.white, 
        paddingHorizontal: 20, 
        paddingVertical: 10, 
        borderRadius: 100,
        top: 40,
        width: 140,
        alignItems: 'center',
        alignSelf: 'center'
    },
    headerButtonText: {
        fontFamily: FONT.bold,
        fontSize: 20
    }
});

export default styles;
