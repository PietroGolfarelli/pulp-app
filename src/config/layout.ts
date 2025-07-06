import { Dimensions, Platform, StatusBar } from 'react-native';

// Schermo
export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// Spaziatura globale
export const SPACING = {
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
};

// Header
export const HEADER_HEIGHT = 44;
export const HEADER_ICON_SIZE = 22;
export const HEADER_PADDING_HORIZONTAL = 16;
export const HEADER_TITLE_FONT_SIZE = 20;

// Card categorie menù
export const NUM_COLUMNS = 2;
export const CARD_MARGIN = SPACING.s;
export const CARD_RADIUS = 20;
export const CARD_IMAGE_SIZE = 80;

// Calcolo larghezza card: solo margini tra le card, nessun margine ai lati
export const CARD_WIDTH = (SCREEN_WIDTH - CARD_MARGIN * (NUM_COLUMNS - 1)) / NUM_COLUMNS;
export const CARD_HEIGHT = CARD_WIDTH; // quadrata

// FlatList padding: solo verticale, niente padding orizzontale!
export const LIST_PADDING_VERTICAL = 16;
export const LIST_PADDING_BOTTOM = SPACING.m;

// Titoli e testo
export const TITLE_FONT_SIZE = 28;
export const TITLE_MARGIN_TOP = Platform.OS === 'ios' ? 12 : StatusBar.currentHeight ?? 12;
export const TITLE_MARGIN_BOTTOM = 0;

// Info prodotto
export const IMAGE_SIZE = 260;
export const TRIANGLE_HEIGHT = HEADER_HEIGHT + IMAGE_SIZE + 40; // Triangolo che copre header + immagine
export const CONTENT_MAX_WIDTH = 420;
export const CONTENT_PADDING_HORIZONTAL = 24;

// Altre costanti riutilizzabili
export const BORDER_RADIUS = 12;
export const SHADOW = {
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
};