# 🚍 MobiCity – Application Mobile de Transport Intelligent (React Native)

**MobiCity** est une application mobile multiplateforme (Android & iOS) développée avec **React Native**. Elle vise à moderniser et fluidifier la mobilité urbaine dans les villes marocaines, en proposant aux citoyens une expérience intelligente, intuitive et connectée autour des transports en commun (bus et tram).

---

## 🧭 Contexte

Le transport urbain au Maroc souffre de plusieurs problématiques :  
- Informations souvent **non centralisées**,  
- **Retards fréquents** sans préavis,  
- Manque de **suivi en temps réel**,  
- Et peu de solutions numériques adaptées au grand public.

Dans ce contexte, **MobiCity** s’impose comme une solution technologique intégrée pour répondre à ces enjeux. L'application capitalise sur les technologies mobiles, les services Firebase et la cartographie en temps réel pour offrir aux usagers un outil pratique, moderne et fiable.

---

## 🎯 Objectif de l'application

Permettre aux utilisateurs :
- De **planifier leurs trajets** de manière optimale,
- De **suivre en temps réel** les véhicules,
- D’être **informés** des perturbations ou retards,
- D’**évaluer** et **signaler** les conditions de voyage,
- De **naviguer hors-ligne** grâce au cache local.

---

## 📱 Fonctionnalités principales (MVP)

| Fonctionnalité                     | Description                                                                 |
|-----------------------------------|-----------------------------------------------------------------------------|
| 📍 Carte interactive              | Affichage dynamique des lignes, arrêts et véhicules en temps réel.         |
| 🧭 Planification d'itinéraires     | Recherche de trajets optimisés selon le temps, distance et correspondances.|
| 🔐 Authentification sécurisée      | Connexion via email/mot de passe ou Google (Firebase Auth).                |
| 🚌 Visualisation des transports    | Suivi des bus et trams en direct sur la carte.                             |
| ⭐ Feedback communautaire          | Notations, signalements d'incidents et visualisation des avis utilisateurs.|
| 🔔 Notifications contextuelles     | Alertes de proximité, retards, perturbations (via Firebase Cloud Messaging).|
| 📤 Mode hors-ligne                 | Consultation des plans et horaires même sans connexion Internet.           |
| 🌐 Multilingue (FR/EN)            | Interface disponible en français et anglais pour une meilleure accessibilité.|

---

## 🛠️ Technologies utilisées

| Composant              | Technologie                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| 📱 Framework mobile     | [React Native (Expo)](https://expo.dev/)                                   |
| 🔐 Authentification     | [Firebase Auth](https://firebase.google.com/products/auth)                  |
| ☁️ Base de données      | [Cloud Firestore](https://firebase.google.com/docs/firestore) (temps réel) |
| 📡 Notifications        | [Firebase Cloud Messaging (FCM)]                                            |
| 🗺️ Cartographie         | [react-native-maps](https://github.com/react-native-maps/react-native-maps), [OpenStreetMap](https://www.openstreetmap.org/) |
| 📍 Géolocalisation      | [expo-location](https://docs.expo.dev/versions/latest/sdk/location/)        |
| 🧠 State Management     | [Zustand](https://github.com/pmndrs/zustand)                                |
| 💾 Stockage local       | [AsyncStorage](https://react-native-async-storage.github.io/async-storage/) |
| 🔀 Navigation           | [React Navigation (Stack & Tab)](https://reactnavigation.org/)              |
| 🎨 UI / Style           | Tailwind CSS (via NativeWind), react-native-paper                          |

---

## 📂 Structure du projet

src/
├── components/ # Composants réutilisables (boutons, cartes, etc.)
├── screens/ # Écrans (auth, home, map, settings, etc.)
├── navigation/ # Stack et Tab Navigators
├── firebase/ # firebase.ts avec config & init
├── store/ # Zustand pour l'état global
├── utils/ # Fonctions utilitaires
├── assets/ # Icônes, images, logos
└── App.tsx # Point d'entrée de l'application