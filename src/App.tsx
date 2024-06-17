import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from 'navigation/AppNavigator';

const App: React.FC = () => {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.tsx to start working on your app!</Text>
  //     <Text>Hola mundo!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return <AppNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default App;
