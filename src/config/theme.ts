export const lightTheme = {
    colors: {
        background: '#FFF9F0',      // crema chiaro
        primary: '#FF6F61',         // corallo acceso
        secondary: '#FFA177',       // albicocca chiaro
        textPrimary: '#2D2D2D',     // grigio scuro
        textSecondary: '#7A7A7A',   // grigio medio
        card: '#FFFFFF',            // bianco per le card
        productBg: '#FFF3E6',       // arancio molto chiaro per sfondo prodotto
        border: '#E0E0E0',          // grigio chiaro per bordi
        accent: '#FFD580',          // giallo pastello per dettagli/accenti
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 32,
    },
    fontSizes: {
        title: 24,
        subtitle: 18,
        body: 14,
        button: 16,
    },
    borderRadius: 12,
    fonts: {
        regular: 'System',
        bold: 'System-Bold',
        italic: 'System-Italic',
    },
};

export const darkTheme = {
    colors: {
        background: '#181A20',      // blu-grigio molto scuro
        primary: '#FF6F61',         // corallo acceso (stesso del light)
        secondary: '#FFA177',       // albicocca chiaro (stesso del light)
        textPrimary: '#F5F5F5',     // quasi bianco
        textSecondary: '#B0B0B0',   // grigio chiaro
        card: '#23242A',            // grigio scuro per le card
        productBg: '#23242A',       // stesso delle card per coerenza
        border: '#292A2F',          // grigio scuro per bordi
        accent: '#FFD580',          // giallo pastello per dettagli/accenti
    },
    spacing: lightTheme.spacing,
    fontSizes: lightTheme.fontSizes,
    borderRadius: lightTheme.borderRadius,
    fonts: {
        regular: 'System',
        bold: 'System-Bold',
        italic: 'System-Italic',
    },
};