import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogoScreen from 'screens/LogoScreen';
import DashboardScreen from 'screens/DashboardScreen';
import { Cheese } from 'interfaces/Cheese';
import CardDetails from 'components/CardDetails';

export type RootStackParamList = {
  Logo: undefined;
  Dashboard: undefined;
  CardDetails: { cheese: Cheese };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logo" component={LogoScreen} />
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="CardDetails" component={CardDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
