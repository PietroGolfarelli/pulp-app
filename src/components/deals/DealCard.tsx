import React from 'react';
import { View, Text, Image, StyleSheet, Platform } from 'react-native';
import { DealType } from '../../config/deals';

type Props = {
    deal: DealType;
};

const getPriceParts = (price: number) => {
    const [int, dec] = price.toFixed(2).split('.');
    return { int, dec };
};

const DealCard = ({ deal }: Props) => {
    const { int, dec } = getPriceParts(deal.discountedPrice);

    return (
        <View style={[styles.cardWrapper, styles.shadow]}>
            {/* Top colorata */}
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
            {/* Bottom bianca */}
            <View style={styles.bottom}>
                <Text style={styles.title}>{deal.title}</Text>
                <Text style={styles.desc}>{deal.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardWrapper: {
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginBottom: 0,
        marginHorizontal: 2,
        borderWidth: 1,
        borderColor: '#ececec',
        zIndex: 1,
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.10,
                shadowRadius: 12,
            },
            android: {
                elevation: 6,
            },
        }),
    },
    top: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 12,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        justifyContent: 'space-between',
    },
    image: {
        width: 180,
        height: 180,
        borderRadius: 18,
        marginLeft: 30,
    },
    priceBox: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    discountedPriceWrapper: {
        borderRadius: 100,
        paddingVertical: 23,
        paddingHorizontal: 12,
        borderWidth: 5,
        alignSelf: 'flex-end',
        marginRight: 8,
        marginBottom: 80
    },
    priceInt: {
        fontSize: 44,
        fontWeight: 'bold',
        lineHeight: 50,
    },
    priceDec: {
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: -1,
        marginBottom: 30,
        lineHeight: 28,
    },
    bottom: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 18,
        paddingVertical: 16
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 4,
        color: '#222',
    },
    desc: {
        fontSize: 15,
        color: '#444',
        marginBottom: 0,
    },
});

export default DealCard;