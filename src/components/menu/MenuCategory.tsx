import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRoute, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import ProductCard from './ProductCard';
import MenuHeader from '../common/MenuHeader';
import {
    CARD_HEIGHT,
    CARD_MARGIN,
    CARD_WIDTH,
    LIST_PADDING_BOTTOM,
    LIST_PADDING_VERTICAL,
    NUM_COLUMNS,
    SCREEN_HEIGHT,
} from '../../config/layout';
import { MenuStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<MenuStackParamList, 'Category'>;
type NavigationProp = NativeStackNavigationProp<MenuStackParamList, 'Category'>;

const MenuCategory = () => {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation<NavigationProp>();
    const route = useRoute<Props['route']>();
    const { category } = route.params;

    const numRows = Math.ceil(category.items.length / NUM_COLUMNS);

    const totalCardsHeight =
        numRows * (CARD_HEIGHT - CARD_MARGIN) +
        (numRows - 1) * CARD_MARGIN;

    const totalHeight =
        totalCardsHeight +
        LIST_PADDING_VERTICAL * 2 +
        LIST_PADDING_BOTTOM +
        insets.top +
        insets.bottom;

    const shouldScroll = totalHeight > SCREEN_HEIGHT;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MenuHeader
                title={category.label}
                onBack={() => navigation.goBack()}
                onCartPress={() => { /* logica futura */ }}
            />
            <FlatList
                data={category.items}
                keyExtractor={item => item.id}
                numColumns={NUM_COLUMNS}
                renderItem={({ item, index }) => (
                    <ProductCard
                        item={item}
                        onInfo={() => navigation.navigate('ProductInfo', { product: item })}
                        onAdd={() => {/* logica add */ }}
                        style={{
                            marginLeft: index % NUM_COLUMNS === 0 ? CARD_MARGIN : CARD_MARGIN / 2,
                            marginRight: index % NUM_COLUMNS === NUM_COLUMNS - 1 ? CARD_MARGIN : CARD_MARGIN / 2,
                            marginBottom: CARD_MARGIN,
                            width: CARD_WIDTH - CARD_MARGIN,
                            height: CARD_HEIGHT - CARD_MARGIN,
                        }}
                    />
                )}
                contentContainerStyle={{
                    paddingVertical: LIST_PADDING_VERTICAL,
                    paddingBottom: LIST_PADDING_BOTTOM + insets.bottom,
                }}
                showsVerticalScrollIndicator={false}
                scrollEnabled={shouldScroll}
            />
        </SafeAreaView>
    );
};

export default MenuCategory;