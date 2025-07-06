import React from 'react';
import { View, Text, Image, TouchableOpacity, ViewStyle } from 'react-native';
import { MenuItemType } from '../../config/menu';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    item: MenuItemType;
    onInfo: () => void;
    onAdd: (item: MenuItemType) => void;
    style?: ViewStyle;
};

const ProductCard = ({ item, onInfo, onAdd, style }: Props) => (
    <View
        style={[
            {
                backgroundColor: '#fff',
                borderRadius: 16,
                padding: 12,
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.06,
                shadowRadius: 6,
                elevation: 1,
            },
            style,
        ]}
    >
        <Image
            source={item.image}
            style={{ width: 60, height: 60, borderRadius: 12, marginBottom: 8 }}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>{item.label}</Text>
        <Text style={{ color: '#666', fontSize: 13, textAlign: 'center' }}>{item.description}</Text>
        <Text style={{ color: '#007bff', fontWeight: 'bold', marginTop: 4 }}>{item.price} €</Text>
        <View style={{ flexDirection: 'row', marginTop: 8 }}>
            <TouchableOpacity onPress={onInfo}>
                <Ionicons name="information-circle-outline" size={24} color="#007bff" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => onAdd(item)}>
                <Ionicons name="add-circle" size={28} color="#28a745" />
            </TouchableOpacity>
        </View>
    </View>
);

export default ProductCard;