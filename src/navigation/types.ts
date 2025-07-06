import { MenuCategoryType, MenuItemType } from '../config/menu';

export type MenuStackParamList = {
    Categories: undefined;
    Category: { category: MenuCategoryType };
    ProductInfo: { product: MenuItemType };
};