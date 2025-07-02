// src/navigation/MenuStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuCategories from '../components/menu/MenuCategories';
import MenuCategory from '../components/menu/MenuCategory';
import { MenuStackParamList } from './types';

const Stack = createNativeStackNavigator<MenuStackParamList>();

const MenuStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Categories" component={MenuCategories} />
        <Stack.Screen name="Category" component={MenuCategory} />
    </Stack.Navigator>
);

export default MenuStack;