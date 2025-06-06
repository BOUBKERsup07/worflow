# 🚍 MobiCity - Application de Transport Intelligent

Une application mobile multiplateforme (Android/iOS) pour révolutionner les transports en commun au Maroc.

## 📌 Table des matières
- [Aperçu](#-aperçu)
- [Fonctionnalités](#-fonctionnalités) 
- [Captures d'écran](#-captures-décran)
- [Technologies](#-technologies)
- [Installation](#-installation)
- [Configuration](#%EF%B8%8F-configuration)
- [Structure du projet](#-structure-du-projet)
- [API utilisées](#-api-utilisées)
- [Roadmap](#-roadmap)
- [Contributions](#-contributions)
- [Licence](#-licence)

## 🌟 Aperçu

MobiCity résout les problèmes de mobilité urbaine au Maroc en offrant :
- 🕒 Informations temps réel sur les transports
- 🗺️ Navigation intuitive vers les arrêts
- 🚍 Suivi live des bus/trams
- 💬 Plateforme communautaire intégrée

## ✨ Fonctionnalités

### Carte Interactive
- Visualisation des réseaux de transport
- Géolocalisation précise
- Alertes de proximité

### Planification
- Calcul d'itinéraires optimisés
- Estimation des temps de trajet
- Historique des déplacements

### Communauté
- Notation des lignes
- Signalement d'incidents
- Modération collaborative

### Hors-ligne
- Cache des données essentielles
- Accès sans connexion
- Synchronisation automatique

## 📸 Captures d'écran

| | | |
|-|-|-|
| ![Ecran 1](https://via.placeholder.com/200x400?text=Carte) | ![Ecran 2](https://via.placeholder.com/200x400?text=Trajets) | ![Ecran 3](https://via.placeholder.com/200x400?text=Profil) |

## 💻 Technologies

**Frontend**:
- React Native (Expo)
- TypeScript
- React Navigation
- NativeWind (TailwindCSS)

**Backend**:
- Firebase Authentication
- Cloud Firestore
- Firebase Cloud Messaging

**Cartographie**:
- react-native-maps
- OpenStreetMap
- Google Directions API

## ⚙️ Installation

```bash
# 1. Cloner le dépôt
git clone https://github.com/BOUBKERsup07/worflow/tree/main/mobiCity-mobile


# 2. Installer les dépendances
cd mobiCity-mobile
npm install

# 3. Configurer l'environnement
cp .env.example .env

# 4. Démarrer l'application
expo start
```

## 🔧 Configuration

1. **Firebase** :
   - Créer un projet dans [Firebase Console](https://console.firebase.google.com/)
   - Activer Authentication et Firestore
   - Configurer les règles de sécurité

2. **Google Maps** :
   - Activer l'API Directions
   - Générer une clé API

3. **Fichier .env** :
```env

```

## 📂 Structure du projet

```
src/
├── assets/
├── components/
├── constants/
├── context/
├── firebase/
├── hooks/
├── navigation/
├── screens/
├── services/
├── store/
├── types/
├── utils/
└── App.tsx
```

## 🌐 API utilisées

| Service | Utilisation | Lien |
|---------|-------------|------|
| Firebase Auth | Authentification | [Docs](https://firebase.google.com/docs/auth) |
| Firestore | Base de données | [Docs](https://firebase.google.com/docs/firestore) |
| Google Directions | Itinéraires | [Docs](https://developers.google.com/maps/documentation/directions) |
| OpenStreetMap | Données carto | [Wiki](https://wiki.openstreetmap.org/wiki/API) |

## 🗺️ Roadmap

### MVP (v1.0)
- [x] Authentification
- [x] Carte de base
- [ ] Suivi temps réel
- [ ] Feedback utilisateurs

### Futures versions
- Paiements intégrés
- Recommandations IA
- Version web

## 🤝 Contributions

1. Forkez le projet
2. Créez une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commitez (`git commit -m 'Ajout d'une fonctionnalité'`)
4. Pushez (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrez une PR

## 📜 Licence

MIT © [MobiCity] - Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">
  <sub>Développé avec ❤️ pour le Maroc</sub>
</div>
