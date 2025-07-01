import React from 'react';
import { TouchableOpacity, Text, Image, ViewStyle } from 'react-native';
import { MenuCategoryType } from '../../config/menu';
import { CARD_MARGIN, CARD_WIDTH } from '../../config/layout';

type Props = {
    category: MenuCategoryType;
    onPress: (category: MenuCategoryType) => void;
    style?: ViewStyle;
};

const CategoryCard = ({ category, onPress, style }: Props) => (
    <TouchableOpacity
        onPress={() => onPress(category)}
        style={[
            {
                backgroundColor: category.color,
                borderRadius: 20,
                margin: CARD_MARGIN,
                width: CARD_WIDTH,
                height: CARD_WIDTH, // quadrata
                alignItems: 'center',
                justifyContent: 'center',
                padding: 12,
                shadowColor: '#000',
                shadowOpacity: 0.08,
                shadowRadius: 8,
                elevation: 2,
            },
            style
        ]}
    >
        <Image source={category.image} style={{ width: 80, height: 80, marginBottom: 8 }} />
        <Text
            style={{
                color: '#fff',
                fontWeight: 'bold',
                fontSize: 20,
                textAlign: 'center',
            }}
        >
            {category.label}
        </Text>
    </TouchableOpacity>
);

export default CategoryCard;