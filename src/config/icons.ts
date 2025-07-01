export const icons = {
    aperture: {
        name: 'aperture',
        lib: 'Feather',
    },
    Home: { name: 'aperture', lib: 'Feather' },
    Deals: { name: 'tag', lib: 'Feather' },
    Order: { name: 'shopping-bag', lib: 'Feather' },
    Delivery: { name: 'truck', lib: 'Feather' },
    Profilo: { name: 'user', lib: 'Feather' },
} as const;

export type IconKey = keyof typeof icons;