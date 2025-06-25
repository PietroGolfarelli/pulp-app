import React from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { useTheme } from '../config/ThemeContext';
import { Feather } from '@expo/vector-icons';
import { labels } from '../config/labels';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
    const { theme, isDark, toggleTheme } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
            <Feather name="aperture" size={64} color={theme.colors.primary} />
            <Text style={[styles.title, { color: theme.colors.textPrimary }]}>{labels.home.title}</Text>

            <View style={styles.switchRow}>
                <Text style={[styles.switchLabel, { color: theme.colors.textSecondary }]}>
                    theme test
                </Text>
                <Switch value={isDark} onValueChange={toggleTheme} />
            </View>
            <StatusBar style={isDark ? 'light' : 'dark'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginTop: 16,
    },
    subtitle: {
        fontSize: 18,
        marginTop: 8,
    },
    switchRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
        gap: 12,
    },
    switchLabel: {
        fontSize: 16,
    },
});