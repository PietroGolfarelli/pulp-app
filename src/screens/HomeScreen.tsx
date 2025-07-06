import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLabels } from '../config/LanguangeProvider';

const HomeScreen = () => {
  const labels = useLabels();
  const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24 }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{labels.home.welcome}</Text>
    </View>
  );


}

export default HomeScreen;