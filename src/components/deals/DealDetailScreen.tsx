import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DealType } from '../../config/deals';
import MenuHeader from '../common/MenuHeader';
import { useLabels } from '../../config/LanguangeProvider';

type RouteParams = { deal: DealType };

const getPriceParts = (price: number) => {
    const [int, dec] = price.toFixed(2).split('.');
    return { int, dec };
};

// Funzione per formattare la data in modo leggibile
const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    // Esempio: 2025-07-31 → 31/07/2025
    return date.toLocaleDateString('it-IT');
};

const DealDetailScreen = () => {
    const labels = useLabels();
    const route = useRoute();
    const navigation = useNavigation();
    const { deal } = route.params as RouteParams;
    const { int, dec } = getPriceParts(deal.discountedPrice);

    const handleUseDeal = () => {
        alert('Offerta utilizzata!');
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <MenuHeader
                title={deal.title}
                onBack={() => navigation.goBack()}
            />

            <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
                <View style={[styles.top, { backgroundColor: deal.color }]}>
                    <Image source={deal.image} style={styles.image} resizeMode="cover" />
                    <View style={styles.priceBox}>
                        <View style={[
                            styles.discountedPriceWrapper,
                            {
                                backgroundColor: deal.priceBgColor,
                                borderColor: deal.priceColor,
                            }
                        ]}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: -10 }}>
                                <Text style={[
                                    styles.priceInt,
                                    { fontFamily: 'Oswald_700Bold', color: deal.priceColor }
                                ]}>
                                    {int}
                                </Text>
                                <Text style={[
                                    styles.priceDec,
                                    { fontFamily: 'Oswald_700Bold', color: deal.priceColor }
                                ]}>
                                    ,{dec}€
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.details}>
                    <Text style={styles.title}>{deal.title}</Text>
                    <Text style={styles.desc}>{deal.description}</Text>
                    <Text style={styles.validUntil}>
                        {labels.deals.validUntil}: {formatDate(deal.validUntil)}
                    </Text>
                </View>
            </ScrollView>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handleUseDeal}>
                    <Text style={styles.buttonText}>{labels.deals.activateOffer}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 38,
        justifyContent: 'space-between'
    },
    image: {
        width: 230,
        height: 230,
        borderRadius: 18,
        marginLeft: 35
    },
    priceBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    discountedPriceWrapper: {
        borderRadius: 100,
        paddingVertical: 33,
        paddingHorizontal: 23,
        borderWidth: 5,
        alignSelf: 'flex-end',
        marginRight: 10,
        marginBottom: 120
    },
    priceInt: {
        fontSize: 50,
        fontWeight: 'bold',
        lineHeight: 60,
    },
    priceDec: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: -1,
        marginBottom: 30,
        lineHeight: 28,
    },
    details: {
        paddingHorizontal: 24,
        paddingTop: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#222',
        textAlign: 'left',
    },
    desc: {
        fontSize: 17,
        color: '#444',
        marginBottom: 8,
        textAlign: 'left',
    },
    validUntil: {
        fontSize: 15,
        color: '#888',
        marginTop: 8,
        textAlign: 'left',
    },
    buttonContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#fff',
        padding: 16
    },
    button: {
        backgroundColor: '#FF5A36',
        borderRadius: 16,
        paddingVertical: 18,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
});

export default DealDetailScreen;