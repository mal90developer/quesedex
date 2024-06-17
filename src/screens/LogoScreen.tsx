import { RootStackParamList } from 'navigation/AppNavigator';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type LogoScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Logo'
>;

type Props = {
  navigation: LogoScreenNavigationProp;
};

const LogoScreen: React.FC<Props> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Logo</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogoScreen;