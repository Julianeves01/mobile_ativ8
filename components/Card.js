import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card() {
    return (
        <View style={styles.card}>
            <Text style={styles.text}> ai que vida difícil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        padding: 20,
        width: '100%',
        backgroundColor: '#pink',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 180,
        height: 180,
    },
    text: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});