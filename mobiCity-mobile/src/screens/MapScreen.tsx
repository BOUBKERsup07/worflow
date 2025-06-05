import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MapScreen = () => {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: location?.coords?.latitude || 33.5731,
          longitude: location?.coords?.longitude || -7.5898,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        showsMyLocationButton
      >
        {/* Les marqueurs des arrêts et bus seront ajoutés ici */}
      </MapView>

      <View style={styles.controls}>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="bus" size={24} color="#2196F3" />
          <Text style={styles.controlText}>Bus</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="train" size={24} color="#2196F3" />
          <Text style={styles.controlText}>Tram</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.controlButton}>
          <Icon name="map-marker" size={24} color="#2196F3" />
          <Text style={styles.controlText}>Arrêts</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  controls: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  controlButton: {
    alignItems: 'center',
    padding: 10,
  },
  controlText: {
    marginTop: 5,
    color: '#2196F3',
    fontSize: 12,
  },
});

export default MapScreen; 