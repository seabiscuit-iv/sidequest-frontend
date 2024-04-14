import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './screens/home';
import Profile from './screens/profile';
import Quests from './screens/quests';

import styles from '../styles/styles';
import { COLORS } from '../constants';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown:false,
      tabBarLabelStyle: styles.tabBarLabelStyle,
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.secondary,
      tabBarStyle: styles.tabBarStyle
    }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Quests" component={Quests} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default Tabs;

