import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


export default function Home() {
    return (
        <View style={styles.container}>
            <Text>Seu credito para entrosar é:</Text>
            <Text>50</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    textoUm: {
        fontSize: 20,

    },
    textoDois: {
        fontSize: 80
    }
})


