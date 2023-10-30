import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';
import Com from './components/item';
export default function App() {
  return (
    <View style={styles.container}>
      <Com/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
