import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { IconKey, icons } from '../config/icons';
import HomeScreen from '../screens/HomeScreen';
import DealScreen from '../screens/DealScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import ProfiloScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
    routeName: IconKey;
    color: string;
    size: number;
};

function TabBarIcon({ routeName, color, size }: Readonly<TabBarIconProps>) {
    const icon = icons[routeName];

    // Scegli la libreria giusta in base a icon.lib
    switch (icon.lib) {
        case 'Feather':
            return <Feather name={icon.name} size={size} color={color} />;
        // case 'MaterialIcons':
        //   return <MaterialIcons name={icon.name} size={size} color={color} />;
        // Aggiungi altri casi se usi più librerie
        default:
            return null;
    }
}

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color, size }) => (
                    <TabBarIcon
                        routeName={route.name as IconKey}
                        color={color}
                        size={size}
                    />
                ),
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Deals" component={DealScreen} />
            <Tab.Screen name="Delivery" component={DeliveryScreen} />
            <Tab.Screen name="Profilo" component={ProfiloScreen} />
        </Tab.Navigator>
    );
}

export default MainTabs;