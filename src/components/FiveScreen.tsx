import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { CustomButton } from './CustomButton';
import { COLORS } from '../constants';

import panaImage from '../../assets/images/pana1.png';

export const FiveScreen = () => {
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Jobs');
  };

  return (
    <View style={styles.header}>
      <Image source={panaImage} style={styles.image} />

      <Text style={styles.title}>¡Excelente!</Text>

      <Text style={styles.subtitle}>
        Haz actualizado tu perfil. Estas cada vez mas cerca de tu próximo
        empleo!
      </Text>

      <CustomButton
        onPress={handleSubmit}
        text="Ver a vacantes"
        bgColor={COLORS.logoBlue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%',
    height: 250,
    resizeMode: 'contain',
    marginVertical: 40,
  },
  title: {
    fontSize: 36,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  bold: {
    fontWeight: '700',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
  row: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
