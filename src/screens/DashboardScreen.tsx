import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';

type DashboardNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Logo'
>;

type Props = {
  navigation: DashboardNavigationProp;
};

const DashboardScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Logo')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DashboardScreen;