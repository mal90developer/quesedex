import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from 'styles/base/colors';
import { RouteProp } from '@react-navigation/native';

type CardDetailsNavigationProp = StackNavigationProp<RootStackParamList, 'CardDetails'>;
type CardDetailsRouteProp = RouteProp<RootStackParamList, 'CardDetails'>;

type Props = {
  navigation: CardDetailsNavigationProp;
  route: CardDetailsRouteProp;
};

const CardDetails: React.FC<Props> = ({ navigation, route }) => {
  const { cheese } = route.params;

  return (
    <View style={styles.cardDetails}>
      <Image style={styles.image} source={{ uri: `./assets/img/${cheese.name.toLocaleLowerCase()}.jpg` }}></Image>
      <View style={styles.cardDetailsContainer}>
        <Text style={styles.name}>{cheese.name}</Text>
        <View style={styles.hr}/>
        <View style={styles.details}>
          <Text style={styles.detailText}>{cheese.aroma}</Text>
          <Text style={styles.detailText}>Tipo de leche: {cheese.milkType}</Text>
          <Text style={styles.detailText}>Sabor: {cheese.flavor}</Text>
          <Text style={styles.detailText}>Origen: {cheese.origin}</Text>
          <Text style={styles.detailText}>Textura: {cheese.texture}</Text>
          <Text style={styles.detailText}>Color: {cheese.color}</Text>

          <Text style={styles.detailText}>Corteza: {cheese.rind}</Text>
          <Text style={styles.detailText}>Maduración: {cheese.maturation}</Text>
          <Text style={styles.detailText}>Pasteurización: {cheese.pasteurisation}</Text>
          <Text style={styles.detailText}>Forma: {cheese.shape}</Text>
          <Text style={styles.detailText}>Grasa(%): {cheese.fatContent}</Text>
          <Text style={styles.detailText}>Humedad(%): {cheese.moistureContent}</Text>
        </View>
        <Pressable onPress={() => navigation.goBack()}>
          <Text>Volver</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardDetails: {
    flex: 1
  },
  image: {
    paddingHorizontal: 0,
    width: '100%',
    height: '40%'
  },
  cardDetailsContainer: {
    flex: 1,
    backgroundColor: colors.yellow700,
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingHorizontal: 10
  },
  name: {
    fontSize: 17,
    fontWeight: 'bold',
    paddingBottom: 1
  },
  hr: {
    borderBottomColor: colors.gray900,
    borderBottomWidth: 2,
  },
  details: {
    paddingTop: 10
  },
  detailText: {
    fontSize: 15,
    paddingBottom: 5
  }
});

export default CardDetails;