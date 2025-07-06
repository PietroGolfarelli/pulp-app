import React, { createContext, useContext, useState, ReactNode } from 'react';
import en from '../langs/en.json';
import it from '../langs/it.json';

const locales = { en, it };

type SupportedLang = keyof typeof locales;
type Labels = typeof en;

interface LanguageContextType {
    lang: SupportedLang;
    labels: Labels;
    setLang: (lang: SupportedLang) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [lang, setLang] = useState<SupportedLang>('en');
    const labels = locales[lang];


    return (
        <LanguageContext.Provider value={{ lang, labels, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLabels = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLabels must be used within a LanguageProvider');
    return ctx.labels;
};

export const useLang = () => {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
    return { lang: ctx.lang, setLang: ctx.setLang };
};