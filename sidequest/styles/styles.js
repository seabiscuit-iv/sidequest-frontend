import { StyleSheet, Dimensions } from "react-native";

import { COLORS, FONT } from "../constants";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    main:{
        flex: 1,
        flexDirection: "column"
    },
    regularText: (fontsize) => ({
        fontFamily: FONT.regular,
        fontSize: fontsize
    }),
    mediumText: (fontsize) => ({
        fontFamily: FONT.medium,
        fontSize: fontsize
    }),
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center'
    },
    mapContainer: {
        flex: 1,
        marginHorizontal: 15,
        marginBottom: 10,
        borderRadius: 15,
        overflow: "hidden"
    },
    fullMapContainer: {
        flex: 1
    },
    headerTitleStyle: {
        fontFamily: FONT.bold,
        fontSize: 24
    },
    questCard: {
        width: windowWidth-30,
        padding: 20,
        marginHorizontal: 15,
        marginVertical: 10,
        borderRadius: 15,
        backgroundColor: COLORS.tertiary
    },
    navBar: {
        width: windowWidth,
        height: 90,
        padding: 20,
        backgroundColor: COLORS.tertiary,
        flexDirection: 'row',
        alignItems: 'center'
    },
    globalView: {
        flex: 1,
        backgroundColor: COLORS.secondary
    },
    mapView: {
        flex: 1
    },
    tabBarLabelStyle: {
        fontFamily: FONT.regular,
        fontSize: 12
    },
    tabBarStyle: {
        backgroundColor: COLORS.tertiary
    },
    profilePicStyle: {
        backgroundColor: COLORS.lightWhite,
        width:150,
        height:150,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    btnImage: {
        width: "60%",
        height: "60%",
        tintColor: COLORS.gray,
    },
    profile: {
        flex: 1,
    },
    profileInfo: {
        flex: 1,
        backgroundColor: '#FFBE6D', // "Edge" background
        maxHeight: 150,
        maxWidth: 150,
        marginLeft: 120,
        marginTop: 10
    },
    completionText: {
        fontFamily: FONT.bold,
        fontSize: 45,
        position: "absolute",
        alignSelf: 'center',
        marginTop: 46,
        textAlign: "center"
    },
    regularCenteredText: {
        fontFamily: FONT.regular,
        fontSize: 23,
        alignSelf:"center"
    }
});

export default styles;
