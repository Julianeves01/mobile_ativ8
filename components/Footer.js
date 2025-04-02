import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text style={styles.title}> ai que vida difícil</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        padding: 20,
        width: '100%',
        backgroundColor: '#pink',
        position: "fixed",
        bottom: 0,
        left: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});