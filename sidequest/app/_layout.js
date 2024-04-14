import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import styles from '../styles/styles';

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    });

    if(!fontsLoaded) {
        console.log("Unable to load fonts");
        return null;
    }

    return <Stack screenOptions={{ 
        headerShown: true,
        headerTransparent: true,
        headerTitle: "Sidequest",
        headerTitleStyle: styles.headerTitleStyle
    }}/>;

}

export default Layout;