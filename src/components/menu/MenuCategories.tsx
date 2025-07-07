import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { MENU, MenuCategoryType } from '../../config/menu';
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
import { useNavigation } from '@react-navigation/native';
import { MenuStackParamList } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useTheme } from '../../config/ThemeContext';

const MenuCategories = () => {
    const { theme } = useTheme();
    const insets = useSafeAreaInsets();
    type NavigationProp = NativeStackNavigationProp<MenuStackParamList, 'Categories'>;
    const navigation = useNavigation<NavigationProp>();

    const numRows = Math.ceil(MENU.length / NUM_COLUMNS);

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

    const handleCategoryPress = (category: MenuCategoryType) => {
        navigation.navigate('Category', { category });
    };

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
                        color: theme.colors.textPrimary,
                    }}
                >
                    Ordina
                </Text>
            </View>

            <FlatList
                data={MENU}
                keyExtractor={item => item.id}
                numColumns={NUM_COLUMNS}
                renderItem={({ item, index }) => (
                    <CategoryCard
                        category={item}
                        onPress={() => handleCategoryPress(item)}
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
                    paddingBottom: LIST_PADDING_BOTTOM + insets.bottom,
                }}
                showsVerticalScrollIndicator={false}
                scrollEnabled={shouldScroll}
            />
        </SafeAreaView>
    );
};

export default MenuCategories;