import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

type Props = {
  title: string;
  description: string;
  id: string;
  onPressCard: (id: string) => void;
};

export const Card: React.FC<Props> = ({title, description, id, onPressCard}) => {


  return (
    <View style={styles.card}>
      <Pressable onPress={() => onPressCard(id)}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={{ uri: `./assets/img/${title}.jpg` }}></Image>
        <Text style={styles.description}>{description}</Text>
      </Pressable>
    </View>
  )

}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    margin: 5,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5
  },
  description: {
    fontSize: 13,
    marginTop: 5
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10
  },
});
