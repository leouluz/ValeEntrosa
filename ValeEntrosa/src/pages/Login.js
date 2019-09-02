import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Login() {
    return (
        <View >
            <Text style={styles.texto}>Testando React-native</Text>
            <TouchableOpacity style={styles.button}><Text>Testando</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 20,
    },
    button: {
        height: 20,
        width: 200,
        borderRadius: 5,
        backgroundColor: '#BA55D3',
    }
})

