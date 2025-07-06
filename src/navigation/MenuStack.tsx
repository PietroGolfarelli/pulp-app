import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MenuCategories from '../components/menu/MenuCategories';
import MenuCategory from '../components/menu/MenuCategory';
import { MenuStackParamList } from './types';
import ProductInfoScreen from '../components/menu/ProductInfoScreen';

const Stack = createNativeStackNavigator<MenuStackParamList>();

const MenuStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Categories" component={MenuCategories} />
        <Stack.Screen name="Category" component={MenuCategory} />
        <Stack.Screen name="ProductInfo" component={ProductInfoScreen} />
    </Stack.Navigator>
);

export default MenuStack;