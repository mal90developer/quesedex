import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';
import { Card } from 'components/Card';
import { getCheeseById, getCheeses } from 'services/CheeseService';
import { Cheese } from 'interfaces/Cheese';
import { colors } from 'styles/base/colors';

type navigationProp = StackNavigationProp<RootStackParamList>;

type Props = {
  navigation: navigationProp;
};

const DashboardScreen: React.FC<Props> = ({navigation}) => {

  const [cheeses, setCheeses] = useState<Cheese[]>();
  const [cheese, setCheese] = useState<Cheese>();

  useEffect(() => {
    getCheeses().then((res) => setCheeses(res.data));
  }, []);

  const handlePressCard = (id: string) => {
    getCheeseById(id).then((res) => {
      setCheese(res.data);
      if (cheese) {
        navigation.navigate('CardDetails', {cheese: cheese});
      }
    });
  }
  
  return (
    <View style={styles.container}>
      <h1>Quesedex</h1>
      <FlatList 
        data={cheeses} 
        renderItem={({item}) => (
          <Card 
            title={item.name} 
            description={item.historyAndTradition} 
            id={item.id} 
            onPressCard={handlePressCard}>
          </Card>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}>
      </FlatList>
      {/* <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Logo')}
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.yellow700,
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 10
  },
  list: {
  }
});

export default DashboardScreen;