import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {setState} from 'expect/build/jestMatchersObject';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cePoint: 50,
    };
    function botaoMenos(cePoint) {
      this.setState({cePoint: cePoint - 1});
    }
    function botaoMais(cePoint) {
      this.setState({cePoint: 10});
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textOne}>Você possui:</Text>
        <View style={styles.pointCard}>
          <View>
            <Text style={styles.textTwo}>{this.state.cePoint}</Text>
          </View>
          <View style={styles.ma}>
            <Text style={styles.textThree}>ce</Text>
          </View>
        </View>

        <View style={styles.containerButton}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonMenos}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonMais}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
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
  button: {
    borderRadius: 80,
    height: 70,
    width: 70,
    backgroundColor: '#000',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  buttonMais: {
    fontSize: 48,
    color: '#f5f5f5',
    textAlign: 'center',
    fontWeight: 'bold',
    elevation: 10,
    shadowColor: '#f5f5f5',
  },
  buttonMenos: {
    fontSize: 48,
    color: '#f5f5f5',
    textAlign: 'center',
    fontWeight: 'bold',
    elevation: 10,
    shadowColor: '#f5f5f5',
  },
  containerButton: {
    flexDirection: 'row',
  },
});
