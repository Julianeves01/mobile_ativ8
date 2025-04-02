import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.subtitle}>Welcome to my App</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'pink',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '13%',
        padding: 20,
        marginBottom: 50,
        flexDirection: 'row',
    },

    title: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
        flex: 1,
        textAlign: 'left',
    },

    subtitle: {
        fontSize: 15,
        color: 'white',
        textAlign: 'left',
    },

});

export default Header;