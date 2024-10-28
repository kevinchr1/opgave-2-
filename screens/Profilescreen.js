import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
//placeholder informationer på brugeren af appen
const ProfileScreen = () => {
  const userName = "Kevin Christensen"; 
  const userEmail = "test@gmail.com";
  const userImage = "https://www.example.com/path-to-your-image.jpg"; 

  return (
    <View style={styles.container}>
      <Image source={{ uri: userImage }} style={styles.profileImage} />
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userEmail}>{userEmail}</Text>
      <Text style={styles.userDescription}>
        Dette er en kort beskrivelse af brugeren.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 10,
  },
  userDescription: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default ProfileScreen;
