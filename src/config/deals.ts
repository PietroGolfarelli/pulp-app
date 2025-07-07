export interface DealType {
    id: string;
    title: string;
    description: string;
    image: any;
    originalPrice: number;
    discountedPrice: number;
    validUntil: string;
    color: string;         // colore della parte top
    priceColor: string;    // colore del prezzo e del bordo
    priceBgColor: string;  // colore di sfondo della pill del prezzo
}

export const DEALS: DealType[] = [
    {
        id: 'deal1',
        title: 'Family Pizza Combo',
        description: '2 Margherita + 1 Bibita a scelta',
        image: require('../assets/pizza.png'),
        originalPrice: 22.00,
        discountedPrice: 16.90,
        validUntil: '2025-07-31',
        color: '#FFD166',         // giallo chiaro (top)
        priceColor: '#FF5A36',    // arancione acceso (pill prezzo)
        priceBgColor: '#fff',     // bianco (sfondo pill prezzo)
    },
    {
        id: 'deal2',
        title: 'Lunch Special',
        description: 'Pasta + Acqua + Dolce',
        image: require('../assets/pizza.png'),
        originalPrice: 14.00,
        discountedPrice: 10.50,
        validUntil: '2025-07-15',
        color: '#06D6A0',         // verde acqua (top)
        priceColor: '#1B263B',    // blu scuro (pill prezzo)
        priceBgColor: '#fff',     // bianco (sfondo pill prezzo)
    },
    {
        id: 'deal3',
        title: 'Tigelle Party',
        description: '10 Tigelle + 2 Salse a scelta',
        image: require('../assets/pizza.png'),
        originalPrice: 18.00,
        discountedPrice: 13.90,
        validUntil: '2025-08-10',
        color: '#EF476F',         // rosa (top)
        priceColor: '#FFD166',    // giallo (pill prezzo)
        priceBgColor: '#22223B',  // blu notte (sfondo pill prezzo)
    },
];