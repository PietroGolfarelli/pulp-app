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
    items: MenuItemType[];
}

// Mock di prodotti generici
const mockItems = [
    {
        id: 'item1',
        label: 'Prodotto 1',
        description: 'Descrizione prodotto 1',
        price: 5.0,
        image: require('../assets/pizza.png'),
    },
    {
        id: 'item2',
        label: 'Prodotto 2',
        description: 'Descrizione prodotto 2',
        price: 6.0,
        image: require('../assets/pizza.png'),
    },
];

// Mock completo delle categorie con prodotti
export const MENU: MenuCategoryType[] = [
    {
        id: 'tigelle',
        label: 'Tigelle',
        image: require('../assets/pizza.png'),
        color: '#6B3B2A',
        items: [
            {
                id: 'tigella-classica',
                label: 'Tigella Classica',
                description: 'Tigella con prosciutto e formaggio',
                price: 3.5,
                image: require('../assets/pizza.png'),
            },
            {
                id: 'tigella-vegetariana',
                label: 'Tigella Vegetariana',
                description: 'Tigella con verdure grigliate',
                price: 4.0,
                image: require('../assets/pizza.png'),
            },
        ],
    },
    {
        id: 'dispensa',
        label: 'Viaggio in Dispensa',
        image: require('../assets/pizza.png'),
        color: '#C44B1A',
        items: mockItems,
    },
    {
        id: 'pasta',
        label: 'Pasta',
        image: require('../assets/pizza.png'),
        color: '#E86F2D',
        items: [
            {
                id: 'spaghetti',
                label: 'Spaghetti al Pomodoro',
                description: 'Spaghetti con salsa di pomodoro fresco',
                price: 7.0,
                image: require('../assets/pizza.png'),
            },
            {
                id: 'penne',
                label: 'Penne al ragù',
                description: 'Penne con salsa piccante',
                price: 7.5,
                image: require('../assets/pizza.png'),
            },
        ],
    },
    {
        id: 'piatti-insalate',
        label: 'Piatti e Insalate',
        image: require('../assets/pizza.png'),
        color: '#1B6B4B',
        items: mockItems,
    },
    {
        id: 'dolci-frutta',
        label: 'Dolci e Frutta',
        image: require('../assets/pizza.png'),
        color: '#0B4B4B',
        items: [
            {
                id: 'tiramisu',
                label: 'Tiramisù',
                description: 'Dolce al cucchiaio con caffè e mascarpone',
                price: 4.5,
                image: require('../assets/pizza.png'),
            },
            {
                id: 'macedonia',
                label: 'Macedonia di Frutta',
                description: 'Frutta fresca di stagione',
                price: 3.0,
                image: require('../assets/pizza.png'),
            },
        ],
    },
    {
        id: 'bevande',
        label: 'Bevande',
        image: require('../assets/pizza.png'),
        color: '#8B2A3B',
        items: [
            {
                id: 'acqua',
                label: 'Acqua Naturale',
                description: 'Bottiglia 0.5L',
                price: 1.0,
                image: require('../assets/pizza.png'),
            },
            {
                id: 'coca',
                label: 'Coca Cola',
                description: 'Lattina 0.33L',
                price: 2.0,
                image: require('../assets/pizza.png'),
            },
        ],
    },
];