import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location'; // Importer Location API

const MapScreen = ({ navigation }) => {
  const mapRef = useRef(null); // Reference til MapView
  const [location, setLocation] = useState(null); // State til at gemme brugerens lokation

  // Hent brugerens nuværende lokation
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Tilladelse til at få adgang til lokation er påkrævet!');
        return;
      }

      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation.coords); // Gem lokationen i state
    })();
  }, []);

  const showLocation = () => {
    if (location) {
      // Opdater kortets region til brugerens nuværende lokation
      mapRef.current.animateToRegion(
        {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.0922, // Zoom-niveau
          longitudeDelta: 0.0421, // Zoom-niveau
        },
        1000 // Animationens varighed
      );
    } else {
      alert('Lokationen er ikke tilgængelig. Vent venligst...');
    }
  };

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef} // Tilføj reference til MapView
        style={styles.map}
        initialRegion={{
          latitude: 20,
          longitude: 0,
          latitudeDelta: 100,
          longitudeDelta: 100,
        }}
      />
      <TouchableOpacity
        style={styles.showLocationButton} // Ny knap til at vise lokation
        onPress={showLocation}
      >
        <Ionicons name="pin" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.favoritesButton}
        onPress={() => navigation.navigate('Favorites')}
      >
        <Ionicons name="heart-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  favoritesButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 56,
    height: 56,
    borderRadius: 28, // Gør knappen rund
    backgroundColor: '#FF4081', // Farve på knappen
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Skaber en skyggeeffekt
  },
  showLocationButton: {
    position: 'absolute',
    bottom: 100, // Placer den over favoritter-knappen
    left: 20,
    width: 56,
    height: 56,
    borderRadius: 28, // Gør knappen rund
    backgroundColor: '#276221', // Farve på knappen
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4, // Skaber en skyggeeffekt
  },
});

export default MapScreen;
