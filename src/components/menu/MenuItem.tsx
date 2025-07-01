import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import { MenuItemType } from '../../config/menu';

type Props = {
    item: MenuItemType;
    onPress: (item: MenuItemType) => void;
};

const MenuItem = ({ item, onPress }: Props) => (
    <TouchableOpacity onPress={() => onPress(item)} style={{ margin: 8, padding: 16, backgroundColor: '#fff', borderRadius: 12 }}>
        <Image source={item.image} style={{ width: 80, height: 80, marginBottom: 8 }} />
        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>{item.label}</Text>
        <Text>{item.description}</Text>
        <Text style={{ color: '#007bff', marginTop: 4 }}>{item.price} €</Text>
    </TouchableOpacity>
);

export default MenuItem;