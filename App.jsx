import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Todos, data } from './src/components/Todos';

export default function App() {
  return (
    <View style={styles.container}>
      <Todos />
      <Text style={styles.firstparagraph}>Open up App.js to start working on your app!</Text>
      <Text>{data[1]}</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  firstparagraph: {
    color: 'red',
  }
});