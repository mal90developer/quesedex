import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from 'navigation/AppNavigator';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from 'styles/base/colors';
import { RouteProp } from '@react-navigation/native';
import MilkIcon from './../../assets/svg/milk.svg';
import AromaIcon from './../../assets/svg/aroma.svg';
import OriginIcon from './../../assets/svg/origin.svg';
import TextureIcon from './../../assets/svg/texture.svg';
import ColorIcon from './../../assets/svg/color.svg';
import RindIcon from './../../assets/svg/rind.svg';
import FlavorIcon from './../../assets/svg/flavor.svg';
import MaturationIcon from './../../assets/svg/maturation.svg';
import PasteurationIcon from './../../assets/svg/pasteuration.svg';
import ShapeIcon from './../../assets/svg/shape.svg';
import FatIcon from './../../assets/svg/fat.svg';
import MostiureIcon from './../../assets/svg/moisture.svg';

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
          <Text style={styles.detailText}><Text style={styles.icon}><AromaIcon width={25} height={25} fill="#000" /></Text>{cheese.aroma}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><MilkIcon width={25} height={25} fill="#000" /></Text>{cheese.milkType}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><FlavorIcon width={25} height={25} fill="#000" /></Text>{cheese.flavor}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><OriginIcon width={25} height={25} fill="#000" /></Text>{cheese.origin}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><TextureIcon width={25} height={25} fill="#000" /></Text>{cheese.texture}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><ColorIcon width={25} height={25} fill="#000" /></Text>{cheese.color}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><RindIcon width={25} height={25} fill="#000" /></Text>{cheese.rind}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><MaturationIcon width={25} height={25} fill="#000" /></Text>{cheese.maturation}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><PasteurationIcon width={25} height={25} fill="#000" /></Text>{cheese.pasteurisation}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><ShapeIcon width={25} height={25} fill="#000" /></Text>{cheese.shape}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><FatIcon width={25} height={25} fill="#000" /></Text>{cheese.fatContent}</Text>
          <Text style={styles.detailText}><Text style={styles.icon}><MostiureIcon width={25} height={25} fill="#000" /></Text>{cheese.moistureContent}</Text>
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
    paddingBottom: 5,
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  }
});

export default CardDetails;