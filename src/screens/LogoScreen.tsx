import React from 'react';
import { RootStackParamList } from 'navigation/AppNavigator';
import { Button, StyleSheet, View } from 'react-native';
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
      <Button
        title="Go to Dashboard"
        onPress={() => navigation.navigate('Dashboard')}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7B00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LogoScreen;