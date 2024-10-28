import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import ForumScreen from './screens/ForumScreen';
import ProfileScreen from './screens/Profilescreen'; 
import MapScreen from './screens/MapScreen';
import FavoritesScreen from './screens/FavoritesScreen'; 
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={MapScreen} options={{ title: 'Map', headerStyle: styles.header }} />
      <Stack.Screen name="Favorites" component={FavoritesScreen} options={{ title: 'Favorites', headerStyle: styles.header }} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#002460' }, 
          headerStyle: { backgroundColor: '#276221' }, 
          headerTintColor: '#fff', 
        }}
      >
        <Tab.Screen
          name="Chat"
          component={ForumScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-ellipses-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={MapStack}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="map-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#276221',
  },
});
