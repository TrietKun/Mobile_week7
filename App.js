import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Screen7a from './screens/screen7a.js'
import Screen7b from './screens/screen7b.js'
import Screen7c from './screens/screen7c.js'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

import HeaderCustom from './navigation/Header.js'

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                header : (prop) => HeaderCustom(prop),
              }}
            >
              <Stack.Screen name="7a" component={Screen7a} options={{headerShown : false}} />
              <Stack.Screen name="7b" component={Screen7b} />
              <Stack.Screen name="7c" component={Screen7c} />
          </Stack.Navigator>
    </NavigationContainer>
  );
}
