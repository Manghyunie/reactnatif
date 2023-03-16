import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Todos, data } from './src/components/Todos';

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}><Text>Header</Text></View>
      <Todos />
      <View><Text>contenu A</Text></View>
      <View><Text>contenu B</Text></View>
      <View><Text>contenu B</Text></View>
      <View style={styles.footer}><Text>Footer</Text></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  firstparagraph: {
    color: 'red',
  },
  
  header: {
    width: "100%",
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  },

  footer: {
    width: "100%",
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 10,
  }

});
