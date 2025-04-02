import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>Julinha Neves</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 20,
        width: '100%',
        backgroundColor: '#000',
        position: "fixed",
        top: 0,
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
