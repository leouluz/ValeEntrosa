import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Você possui:</Text>
      <View style={styles.pointCard}>
        <View>
          <Text style={styles.textTwo}>50</Text>
        </View>
        <View style={styles.ma}>
          <Text style={styles.textThree}>ce</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  textOne: {
    fontSize: 20,
  },
  textTwo: {
    fontSize: 200,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  pointCard: {
    flexDirection: 'row',
  },
  textThree: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  ma: {
    marginTop: 180,
  },
});
