import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = () => {
  const quickActions = [
    {
      title: 'Planifier un trajet',
      icon: 'map-search',
      color: '#2196F3',
    },
    {
      title: 'Horaires en direct',
      icon: 'clock-time-four',
      color: '#4CAF50',
    },
    {
      title: 'Mes favoris',
      icon: 'star',
      color: '#FFC107',
    },
    {
      title: 'Alertes trafic',
      icon: 'alert',
      color: '#F44336',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>MobiCity</Text>
          <Text style={styles.subtitle}>Votre mobilité simplifiée</Text>
        </View>

        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchBar}>
            <Icon name="magnify" size={24} color="#666" />
            <Text style={styles.searchText}>Où allez-vous ?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionTitle}>Actions rapides</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action, index) => (
              <TouchableOpacity
                key={index}
                style={styles.quickActionButton}
              >
                <View style={[styles.iconContainer, { backgroundColor: action.color }]}>
                  <Icon name={action.icon} size={24} color="white" />
                </View>
                <Text style={styles.quickActionText}>{action.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.nearbyContainer}>
          <Text style={styles.sectionTitle}>Arrêts à proximité</Text>
          {/* Liste des arrêts à proximité à implémenter */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#2196F3',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.8,
  },
  searchContainer: {
    padding: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 8,
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  quickActionsContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    width: '48%',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    color: '#333',
  },
  nearbyContainer: {
    padding: 15,
  },
});

export default HomeScreen; 