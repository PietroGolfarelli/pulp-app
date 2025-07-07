import React from 'react';
import { FlatList, SafeAreaView, View, Text } from 'react-native';
import { DEALS } from '../config/deals';
import DealCard from '../components/deals/DealCard';
import { useTheme } from '../config/ThemeContext';
import { useLabels } from '../config/LanguangeProvider';
import { TITLE_MARGIN_BOTTOM, TITLE_MARGIN_TOP } from '../config/layout';

export default function DealScreen() {
  const labels = useLabels();
  const { theme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
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
          {labels.tabs.deals}
        </Text>
      </View>

      <FlatList
        data={DEALS}
        keyExtractor={item => item.id}
        contentContainerStyle={{ padding: 24, paddingTop: 0 }}
        renderItem={({ item }) => <DealCard deal={item} />}
        ItemSeparatorComponent={() => <View style={{ height: 24 }} />}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}