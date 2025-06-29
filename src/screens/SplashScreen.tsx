import React, { useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { ThemeContext } from '../config/ThemeContext';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Feather } from '@expo/vector-icons';

type RootStackParamList = {
    Splash: undefined;
    MainTabs: undefined;
};

type SplashScreenProps = {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Splash'>;
};

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('MainTabs');
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigation]);

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Feather name="aperture" size={64} color={theme.colors.primary} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 180,
        height: 180,
    },
});

export default SplashScreen;