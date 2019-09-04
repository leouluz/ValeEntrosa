import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';





export default function Login({ navigation }) {
    function handleLogin() {
        navigation.navigate('Home')
    }


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Vale Entrosa</Text>
            <Text style={styles.texto}>(Logo/encarregado pela equipe de designer)</Text>
            <TextInput style={styles.input} placeholder="Digite seu usuario"></TextInput>
            <TouchableOpacity
                onPress={handleLogin}
                style={styles.button}><Text style={styles.buttonText}>Testando</Text></TouchableOpacity>
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
        borderColor: '#BA55D3',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },
    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#BA55D3',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});