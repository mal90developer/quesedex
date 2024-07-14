import React from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';
import { Card } from 'components/Card';

type DashboardNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Logo'
>;

type Props = {
  navigation: DashboardNavigationProp;
};

const DashboardScreen: React.FC<Props> = ({navigation}) => {

  const data = [
    { id: '1', title: 'Prueba 1', description: 'Descripción 1' },
    { id: '2', title: 'Prueba 2', description: 'Descripción 2' },
    { id: '3', title: 'Prueba 3', description: 'Descripción 3' },
    { id: '4', title: 'Prueba 4', description: 'Descripción 4' },
    { id: '5', title: 'Prueba 5', description: 'Descripción 5' },
    { id: '6', title: 'Prueba 6', description: 'Descripción 6' },
    { id: '7', title: 'Prueba 7', description: 'Descripción 7' },
    { id: '8', title: 'Prueba 8', description: 'Descripción 8' },
    { id: '9', title: 'Prueba 9', description: 'Descripción 9' },
    { id: '10', title: 'Prueba 10', description: 'Descripción 10' },
    { id: '11', title: 'Prueba 11', description: 'Descripción 11' },
    { id: '12', title: 'Prueba 12', description: 'Descripción 12' },
    { id: '13', title: 'Prueba 13', description: 'Descripción 13' },
    { id: '14', title: 'Prueba 14', description: 'Descripción 14' },
  ];
  return (
    <View style={styles.container}>
      <FlatList 
        data={data} 
        renderItem={({item}) => (
          <View>
            <Card title={item.title} description={item.description}></Card>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}>
      </FlatList>
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
    backgroundColor: '#FF7B00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
  },
});

export default DashboardScreen;