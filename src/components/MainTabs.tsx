import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';
import { IconKey, icons } from '../config/icons';
import HomeScreen from '../screens/HomeScreen';
import DealScreen from '../screens/DealScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import ProfiloScreen from '../screens/ProfileScreen';
import MenuStack from '../navigation/MenuStack';
import { useLabels } from '../config/LanguangeProvider';

const Tab = createBottomTabNavigator();

type TabBarIconProps = {
    routeName: IconKey;
    color: string;
    size: number;
};

function TabBarIcon({ routeName, color, size }: Readonly<TabBarIconProps>) {
    const icon = icons[routeName];
    if (!icon) {
        console.warn(`Icon not found for route: ${routeName}`);
        return null;
    }
    switch (icon.lib) {
        case 'Feather':
            return <Feather name={icon.name} size={size} color={color} />;
        default:
            return null;
    }
}

function MainTabs() {
    const labels = useLabels();

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
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{ tabBarLabel: labels.tabs.home }}
            />
            <Tab.Screen
                name="Deals"
                component={DealScreen}
                options={{ tabBarLabel: labels.tabs.deals }}
            />
            <Tab.Screen
                name="Order"
                component={MenuStack}
                options={{ tabBarLabel: labels.tabs.order }}
            />
            <Tab.Screen
                name="Delivery"
                component={DeliveryScreen}
                options={{ tabBarLabel: labels.tabs.delivery }}
            />
            <Tab.Screen
                name="Profilo"
                component={ProfiloScreen}
                options={{ tabBarLabel: labels.tabs.profile }}
            />
        </Tab.Navigator>
    );
}

export default MainTabs;