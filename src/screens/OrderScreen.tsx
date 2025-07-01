import React, { useState } from 'react';
import MenuCategories from '../components/menu/MenuCategories';
import MenuCategory from '../components/menu/MenuCategory';
import { MENU, MenuCategoryType } from '../config/menu';

const OrderScreen = () => {
    const [selectedCategory, setSelectedCategory] = useState<MenuCategoryType | null>(null);

    if (!selectedCategory) {
        return <MenuCategories onCategoryPress={setSelectedCategory} />;
    }

    const categoryData = MENU.find(cat => cat.id === selectedCategory.id);

    return (
        <MenuCategory
            items={categoryData?.items || []}
            onItemPress={item => {/* gestisci selezione prodotto */ }}
        />
    );
};

export default OrderScreen;