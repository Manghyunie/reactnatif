import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export const data=['jade','felix','tristan']

export function Todos() {
  return (
    <View style={styles.container}>
      <Text style={styles.firstparagraph}>TODOS!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 20,
    margin: 5,
  },

  firstparagraph: {
    color: 'red',
  }
});
