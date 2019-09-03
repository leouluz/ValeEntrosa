import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';



export default function Login() {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Testando React-native</Text>
            <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Testando</Text></TouchableOpacity>
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
    input:{
        height:46,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth:1,
        borderColor:'#ddd',
        borderRadius:4,
        marginTop: 20,
        paddingHorizontal:15,
    },
    button:{
        height:46,
        alignSelf: 'stretch',
        backgroundColor: '#BA55D3',
        borderRadius:4,
        marginTop:10,
        justifyContent:'center',
        alignItems: 'center',
    },

    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize:16,
    }
});