import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login({navigation}) {
  function handlerLogin() {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}> Vale Entrosa</Text>
      <Text style={styles.texto}>
        (Logo/Encarregada pela equipe de designer)
      </Text>
      <TextInput style={styles.input} placeholder="Digite seu usuario" />
      <TouchableOpacity style={styles.button} onPress={handlerLogin}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 30,
    color: '#02193e',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  input: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#808080',
    borderRadius: 10,
    marginTop: 20,
    paddingHorizontal: 15,
  },
  button: {
    height: 46,
    alignSelf: 'stretch',
    backgroundColor: '#808080',
    borderRadius: 20,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
