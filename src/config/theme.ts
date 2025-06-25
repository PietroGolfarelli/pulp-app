export const lightTheme = {
    colors: {
        background: '#FFF9F0',     // crema chiaro
        primary: '#FF6F61',        // corallo acceso
        secondary: '#FFA177',      // albicocca chiaro
        textPrimary: '#2D2D2D',    // grigio scuro
        textSecondary: '#555555',  // grigio medio
    },
    spacing: {
        xs: 4,     // extra small
        s: 8,      // small
        m: 16,     // medium
        l: 24,     // large
        xl: 32,    // extra large
    },
    fontSizes: {
        title: 24,     // titolo principale
        subtitle: 18,  // sottotitolo
        body: 14,      // testo normale
        button: 16,    // testo nei pulsanti
    },
    borderRadius: 12,  // angoli arrotondati
};

export const darkTheme = {
    colors: {
        background: '#121212',     // grigio-nero scuro
        primary: '#FF6F61',        // corallo acceso (stesso del light)
        secondary: '#FFA177',      // albicocca chiaro (stesso del light)
        textPrimary: '#FFFFFF',    // bianco puro
        textSecondary: '#AAAAAA',  // grigio chiaro
    },
    spacing: lightTheme.spacing,
    fontSizes: lightTheme.fontSizes,
    borderRadius: lightTheme.borderRadius,
};