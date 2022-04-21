import { StyleSheet, SafeAreaView } from 'react-native';
import { HomeScreen } from './src/screens/HomeScreen/HomeScreen';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <HomeScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#477DF3',
  },
});
