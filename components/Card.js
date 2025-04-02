import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Card = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.title}>My card title</Text>
            <Text style={styles.title}>🎀</Text>
            <Text style={styles.subtitle}>My card subtitle</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    content : {
        backgroundColor: 'rgba(253, 156, 206, 0.77)',
        marginTop: 20,
        width: '90%',
        height: '30%',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginBottom: 20,
    },

    title : {
        fontSize: 24,
        padding: 2,
        textAlign: 'flex-start',
        fontWeight: '600',
        color: 'white',
        marginTop: 5,
    },

    subtitle : {
        fontSize: 15,
        marginTop: '20',
        padding: 10,
        color: 'white',
        textAlign: 'flex-start',
    },
});

export default Card;