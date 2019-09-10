import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Seu credito para entrosar é de: </Text>
      <Text style={styles.textTwo}>50</Text>
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
