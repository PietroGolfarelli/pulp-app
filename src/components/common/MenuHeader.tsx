import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HEADER_HEIGHT, HEADER_ICON_SIZE, TITLE_MARGIN_TOP } from '../../config/layout';

type Props = {
    title: string;
    onBack: () => void;
    onCartPress?: () => void;
};

const MenuHeader = ({ title, onBack, onCartPress }: Props) => (
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingTop: TITLE_MARGIN_TOP,
            paddingHorizontal: 12,
            height: HEADER_HEIGHT + TITLE_MARGIN_TOP, // sottile
            backgroundColor: 'transparent',
            zIndex: 10,
        }}
    >
        {/* Back button */}
        <TouchableOpacity onPress={onBack} style={{ padding: 4, marginRight: 8 }}>
            <Ionicons name="arrow-back" size={HEADER_ICON_SIZE} color="#222" />
        </TouchableOpacity>

        {/* Title */}
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                style={{
                    fontSize: 20, // più piccolo
                    fontWeight: '600', // più leggero
                    color: '#222',
                }}
                numberOfLines={1}
                ellipsizeMode="tail"
            >
                {title}
            </Text>
        </View>

        {/* Cart button */}
        <TouchableOpacity onPress={onCartPress} style={{ padding: 4, marginLeft: 8 }}>
            <Ionicons name="cart-outline" size={HEADER_ICON_SIZE} color="#222" />
        </TouchableOpacity>
    </View>
);

export default MenuHeader;