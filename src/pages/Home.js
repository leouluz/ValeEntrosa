import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Você possui:</Text>
      <Text style={styles.textTwo}>50</Text>
      <Text style={styles.textOne}>ce</Text>

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
    fontSize: 80,
  },
});
