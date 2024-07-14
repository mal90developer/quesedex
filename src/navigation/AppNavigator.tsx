import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoScreen from 'screens/LogoScreen';
import DashboardScreen from 'screens/DashboardScreen';

export type RootStackParamList = {
  Logo: undefined;
  Dashboard: undefined;
};

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logo" component={LogoScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
