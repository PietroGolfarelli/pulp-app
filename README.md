---

```
# 📱 Pulp App

[![Expo](https://img.shields.io/badge/Expo-^50.0.0-1B1F23?logo=expo&logoColor=white)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-%5E0.74.0-61DAFB?logo=react&logoColor=white)](https://reactnative.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-%5E5.0.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![CI](https://github.com/PietroGolfarelli/pulp-app/actions/workflows/ci.yml/badge.svg)](https://github.com/PietroGolfarelli/pulp-app/actions)
[![i18n Ready](https://img.shields.io/badge/i18n-ready-4BBAF4)](#)

> App mobile **React Native** + **Expo** + **TypeScript**  
> Temi personalizzabili, internazionalizzazione, struttura modulare e CI integrata.

---

## 📑 Table of Contents

- [🚀 Caratteristiche](#-caratteristiche)
- [📦 Struttura del progetto](#-struttura-del-progetto)
- [🛠️ Avvio rapido](#️-avvio-rapido)
- [🌗 Temi personalizzabili](#-temi-personalizzabili)
- [🌍 Internazionalizzazione](#-internazionalizzazione)
- [🧪 CI & Flusso Git](#-ci--flusso-git)
- [📦 Dipendenze principali](#-dipendenze-principali)
- [✅ TODO Futuri](#-todo-futuri)
- [🧑‍💻 Autore](#-autore)

---

## 🚀 Caratteristiche

- ⚛️ **React Native** + **Expo** per sviluppo mobile rapido e cross-platform
- 🎨 **Temi light/dark** completamente configurabili da file
- 🌍 **Internazionalizzazione (i18n)** con rilevamento automatico lingua
- 🧩 **Componenti generici** e customizzabili via JSON/file esterni
- 🧪 **GitHub Actions** per CI automatica
- 🔀 **Strategia Git**: branch `main` (produzione) e `develop` (sviluppo)

---

## 📦 Struttura del progetto

.
├── src/
│   ├── config/            # Temi, traduzioni, contesto globale
│   │   ├── ThemeContext.tsx
│   │   ├── theme.ts
│   │   ├── labels.ts
│   │   └── i18n/
│   │       └── i18n.ts
│   ├── screens/           # Schermate principali (es. HomeScreen)
│   └── components/        # Componenti riutilizzabili (in futuro)
├── .github/workflows/     # GitHub Actions CI
├── .gitignore
├── App.tsx
└── README.md

---

## 🛠️ Avvio rapido

1. **Clona il repository**

   git clone https://github.com/PietroGolfarelli/pulp-app.git
   cd pulp-app

2. **Installa le dipendenze**

   npm install

3. **Avvia l’app in ambiente di sviluppo**

   npx expo start

   Si aprirà Metro Bundler. Da lì puoi:
   - Premere `i` per iOS Simulator
   - Premere `a` per Android
   - Scansionare il QR code con Expo Go

---

## 🌗 Temi personalizzabili

Il tema può essere cambiato manualmente tramite uno switch nella schermata principale.

I temi sono definiti in `src/config/theme.ts` e sono **totalmente configurabili**:

export const lightTheme = {
  colors: {
    background: '#FFF9F0', // beige chiaro
    primary: '#FF6F61',    // rosso corallo
    // ...
  },
  // ...
}

---

## 🌍 Internazionalizzazione

Le traduzioni sono gestite con **i18next** in `src/config/i18n/i18n.ts`.

**Lingue supportate:**
- 🇮🇹 Italiano
- 🇬🇧 Inglese

Il sistema rileva automaticamente la lingua del dispositivo.  
Puoi forzare manualmente una lingua con:

import i18n from './i18n';
i18n.changeLanguage('it'); // o 'en'

---

## 🧪 CI & Flusso Git

Ogni push su `main` o `develop` attiva una GitHub Action (`.github/workflows/ci.yml`) che:
- Controlla il codice
- Installa le dipendenze
- (Facoltativamente) esegue lint/build

### 🔁 Flusso di sviluppo

| Branch   | Scopo                    |
|----------|--------------------------|
| `main`   | Produzione (releases)    |
| `develop`| Tutto lo sviluppo        |

**Workflow consigliato:**

# Nuova feature
git checkout develop
git pull
git checkout -b feature/nome-feature

# Dopo aver completato
git add .
git commit -m "Aggiunge feature XYZ"
git push origin feature/nome-feature
# Merge in develop (via GitHub PR)

# Per rilasciare
git checkout main
git pull
git merge develop
git push origin main
git tag v1.0.0
git push origin v1.0.0

---

## 📦 Dipendenze principali

- react-native
- expo
- react-i18next & i18next
- react-native-localize
- @expo/vector-icons

---

## ✅ TODO Futuri

- Persistenza del tema (AsyncStorage)
- Caricamento dinamico di temi e testi da file JSON remoti
- Componenti altamente configurabili (es: pulsanti, input, card, etc.)
- Navigazione (stack o tab navigator)
- Test automatici

---

## 🧑‍💻 Autore

**Pietro Golfarelli**  
https://github.com/PietroGolfarelli
```

---