import React from 'react';
import { FlatList } from 'react-native';
import { MenuItemType } from '../../config/menu';
import MenuItem from './MenuItem';

type Props = {
    items: MenuItemType[];
    onItemPress: (item: MenuItemType) => void;
};

const MenuCategory = ({ items, onItemPress }: Props) => (
    <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
            <MenuItem item={item} onPress={onItemPress} />
        )}
    />
);

export default MenuCategory;