import { DealType } from '../config/deals';
import { MenuCategoryType, MenuItemType } from '../config/menu';

export type MenuStackParamList = {
    Categories: undefined;
    Category: { category: MenuCategoryType };
    ProductInfo: { product: MenuItemType };
};

export type DealsStackParamList = {
    DealList: undefined;
    DealDetail: { deal: DealType };
};