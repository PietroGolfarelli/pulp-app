import React from 'react';
import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useTheme } from '../../config/ThemeContext';
import MenuHeader from '../common/MenuHeader';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MenuStackParamList } from '../../navigation/types';
import { CONTENT_MAX_WIDTH, CONTENT_PADDING_HORIZONTAL, HEADER_HEIGHT, IMAGE_SIZE, SCREEN_WIDTH, TRIANGLE_HEIGHT } from '../../config/layout';

type Props = NativeStackScreenProps<MenuStackParamList, 'ProductInfo'>;

const ProductInfoScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<Props['route']>();
    const { product } = route.params;
    const { theme } = useTheme();

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            {/* Wrapper per triangolo, header e immagine */}
            <View style={{
                width: SCREEN_WIDTH,
                height: TRIANGLE_HEIGHT,
                marginBottom: 24,
                position: 'relative',
                alignItems: 'center',
                justifyContent: 'flex-start',
                alignSelf: 'center',
            }}>
                {/* Triangolo specchiato e più alto */}
                <View
                    style={{
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: SCREEN_WIDTH + 40,
                        height: TRIANGLE_HEIGHT + 40,
                        borderRightWidth: SCREEN_WIDTH,
                        borderBottomWidth: TRIANGLE_HEIGHT,
                        borderRightColor: theme.colors.primary,
                        borderBottomColor: 'transparent',
                        borderLeftWidth: 0,
                        borderTopWidth: 0,
                        borderLeftColor: 'transparent',
                        borderTopColor: 'transparent',
                        backgroundColor: 'transparent',
                        zIndex: 0,
                    }}
                />
                {/* Header sopra il triangolo */}
                <View style={{ width: '100%', zIndex: 1 }}>
                    <MenuHeader
                        title=""
                        onBack={() => navigation.goBack()}
                        onCartPress={() => { }}
                    />
                </View>
                {/* Immagine sopra il triangolo */}
                <Image
                    source={product.image}
                    style={{
                        width: IMAGE_SIZE,
                        height: IMAGE_SIZE,
                        borderRadius: IMAGE_SIZE / 2,
                        backgroundColor: theme.colors.productBg,
                        position: 'absolute',
                        left: (SCREEN_WIDTH - IMAGE_SIZE) / 2,
                        top: HEADER_HEIGHT / 2 + 20, // Sposta l'immagine sotto l'header
                        zIndex: 2,
                    }}
                    resizeMode="cover"
                />
            </View>
            {/* Testo */}
            <View style={{
                width: '100%',
                maxWidth: 420,
                alignItems: 'flex-start',
                alignSelf: 'center',
                paddingHorizontal: 24,
            }}>
                {/*TITOLO*/}
                <Text style={{
                    fontSize: 28,
                    fontWeight: 'bold',
                    color: theme.colors.primary,
                    marginBottom: 24,
                    textAlign: 'left',
                }}>
                    {product.label}
                </Text>
                {/*INGREDIENTI*/}
                <Text style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: theme.colors.secondary,
                    marginBottom: 4,
                    textAlign: 'left',
                }}>
                    Ingredienti
                </Text>
                <Text style={{
                    fontSize: 15,
                    color: theme.colors.textPrimary,
                    marginBottom: 8,
                    textAlign: 'left',
                }}>
                    {Array.isArray(product.ingredients) && product.ingredients.length > 0
                        ? product.ingredients.join(', ')
                        : 'Nessun ingrediente disponibile'}
                </Text>
                {/*ALLERGENI*/}
                <Text style={{
                    fontSize: 15,
                    fontWeight: '600',
                    color: theme.colors.secondary,
                    marginBottom: 4,
                    textAlign: 'left',
                }}>
                    Allergeni
                </Text>
                <Text style={{
                    fontSize: 15,
                    color: theme.colors.textPrimary,
                    marginBottom: 32,
                    textAlign: 'left',
                }}>
                    {Array.isArray(product.allergens) && product.allergens.length > 0
                        ? product.allergens.join(', ')
                        : 'Nessun allergene'}
                </Text>
            </View>
            {/* PREZZO E AGGIUNGI FISSI IN BASSO */}
            <SafeAreaView style={{
                width: '100%',
                alignItems: 'center',
                backgroundColor: '#fff',
                paddingBottom: 16,
            }}>
                <View style={{
                    width: '100%',
                    maxWidth: CONTENT_MAX_WIDTH,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    alignSelf: 'center',
                    paddingHorizontal: CONTENT_PADDING_HORIZONTAL,
                }}>
                    <Text style={{
                        fontSize: 24,
                        fontWeight: 'bold',
                        color: theme.colors.primary,
                    }}>
                        € {product.price.toFixed(2)}
                    </Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: theme.colors.primary,
                            borderRadius: 16,
                            paddingVertical: 14,
                            paddingHorizontal: 36,
                            alignItems: 'center',
                        }}
                        onPress={() => {/* logica aggiunta al carrello */ }}
                        activeOpacity={0.85}
                    >
                        <Text style={{
                            color: '#fff',
                            fontSize: 18,
                            fontWeight: 'bold',
                        }}>
                            Aggiungi
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaView>
    );
};

export default ProductInfoScreen;