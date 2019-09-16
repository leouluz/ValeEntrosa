import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';



export default function Home() {

  const botaoMais = () => {
    cePoint = cePoint + 1
    return cePoint;
  }
  const botaoMenos = () => {
    cePoint = cePoint - 1
    return cePoint;
  }
  var cePoint = 50;
  return (
    
    <View style={styles.container}>
      <Text style={styles.textOne}>Você possui:</Text>
      <View style={styles.pointCard}>
        <View>
          <Text style={styles.textTwo}>{cePoint}</Text>
        </View>
        <View style={styles.ma}>
          <Text style={styles.textThree}>ce</Text>
        </View>
      </View>
      <View style={styles.containerButton}>
        <TouchableOpacity onPress={botaoMenos} style={styles.button}>
            <Text style={styles.buttonMenos}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={botaoMais} style={styles.button}>
            <Text style={styles.buttonMais}>+</Text>
        </TouchableOpacity>
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
  button:{
    borderRadius: 80,
    height: 70,
    width: 70,
    backgroundColor: '#000',
    alignItems: 'center',
    marginHorizontal:10
  },
  buttonMais:{
    fontSize:48,
    color: '#f5f5f5',
    textAlign: 'center',
    fontWeight: 'bold',
    elevation: 10,
    shadowColor: '#f5f5f5'
  },
  buttonMenos:{
    fontSize:48,
    color: '#f5f5f5',
    textAlign: 'center',
    fontWeight: 'bold',
    elevation: 10,
    shadowColor: '#f5f5f5'
  },
  containerButton:{
    flexDirection: 'row'
  }
});
