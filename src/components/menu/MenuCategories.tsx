import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { MENU_CATEGORIES, MenuCategoryType } from '../../config/menu';
import CategoryCard from './CategoryCard';
import {
    CARD_HEIGHT,
    CARD_MARGIN,
    CARD_WIDTH,
    LIST_PADDING_BOTTOM,
    LIST_PADDING_VERTICAL,
    NUM_COLUMNS,
    SCREEN_HEIGHT,
    TITLE_MARGIN_BOTTOM,
    TITLE_MARGIN_TOP,
} from '../../config/layout';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type Props = {
    onCategoryPress: (category: MenuCategoryType) => void;
};

const MenuCategories = ({ onCategoryPress }: Props) => {
    const insets = useSafeAreaInsets();

    const numRows = Math.ceil(MENU_CATEGORIES.length / NUM_COLUMNS);

    // Altezza totale delle card (includendo margini tra le righe)
    const totalCardsHeight =
        numRows * (CARD_HEIGHT - CARD_MARGIN) +
        (numRows - 1) * CARD_MARGIN;

    // Altezza totale con padding e safe area
    const totalHeight =
        totalCardsHeight +
        LIST_PADDING_VERTICAL * 2 +
        LIST_PADDING_BOTTOM +
        insets.top +
        insets.bottom;

    // Scroll solo se serve
    const shouldScroll = totalHeight > SCREEN_HEIGHT;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ paddingTop: TITLE_MARGIN_TOP, paddingHorizontal: 20, marginBottom: TITLE_MARGIN_BOTTOM }}>
                <Text
                    style={{
                        fontSize: 28,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        marginTop: TITLE_MARGIN_TOP,
                        marginBottom: TITLE_MARGIN_BOTTOM,
                        color: '#222',
                    }}
                >
                    Ordina
                </Text>
            </View>

            <FlatList
                data={MENU_CATEGORIES}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item, index }) => (
                    <CategoryCard
                        category={item}
                        onPress={onCategoryPress}
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

export default MenuCategories;