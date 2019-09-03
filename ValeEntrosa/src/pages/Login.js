import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';



export default function Login() {
    return (
        <View texto={sdasda} style={styles.tela}>
            <Text style={styles.texto}>Testando React-native</Text>
            <TouchableOpacity style={styles.button}><Text>Testando</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    tela: {
        alignItems: 'center'
    },
    texto: {
        padding: (200, 30),
        fontSize: 20,
    },
    button: {
        paddingTop: 10,
        height: 50,
        width: 250,
        borderRadius: 5,
        shadowColor: 15,
        backgroundColor: '#BA55D3',
        alignItems: 'center'
    }
})

