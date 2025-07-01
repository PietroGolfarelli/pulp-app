export interface MenuItemType {
    id: string;
    label: string;
    description: string;
    price: number;
    image: any; // Puoi specificare meglio se usi immagini remote o locali
}

export interface MenuCategoryType {
    id: string;
    label: string;
    image: any; // oppure string se usi immagini remote
    color: string; // colore di sfondo della card
}

export const MENU = [
    {
        id: 'pizza',
        label: 'Pizze',
        icon: 'pizza', // chiave per icons.ts
        items: [
            {
                id: 'margherita',
                label: 'Margherita',
                description: 'Pomodoro, mozzarella, basilico',
                price: 6.5,
                image: require('../assets/pizza.png'),
            },
            {
                id: 'diavola',
                label: 'Diavola',
                description: 'Pomodoro, mozzarella, salame piccante',
                price: 7.5,
                image: require('../assets/pizza.png'),
            },
        ],
    },
];


export const MENU_CATEGORIES: MenuCategoryType[] = [
    {
        id: 'tigelle',
        label: 'Tigelle',
        image: require('../assets/pizza.png'), // Sostituisci con il path giusto
        color: '#6B3B2A',
    },
    {
        id: 'dispensa',
        label: 'Viaggio in Dispensa',
        image: require('../assets/pizza.png'),
        color: '#C44B1A',
    },
    {
        id: 'pasta',
        label: 'Pasta',
        image: require('../assets/pizza.png'),
        color: '#E86F2D',
    },
    {
        id: 'piatti-insalate',
        label: 'Piatti e Insalate',
        image: require('../assets/pizza.png'),
        color: '#1B6B4B',
    },
    {
        id: 'dolci-frutta',
        label: 'Dolci e Frutta',
        image: require('../assets/pizza.png'),
        color: '#0B4B4B',
    },
    {
        id: 'bevande',
        label: 'Bevande',
        image: require('../assets/pizza.png'),
        color: '#8B2A3B',
    },
];