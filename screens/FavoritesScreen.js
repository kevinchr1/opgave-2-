import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// FavoritesScreen vil vise ens yndlingsanbefalinger i appen.
const FavoritesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {/* Her kan man tilføje favoritlokationer eller andet indhold */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',      
    alignItems: 'center',         
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',        
  },
});

export default FavoritesScreen;
