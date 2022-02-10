import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
    var name = `Nika`
    return (
    <View>
    <Text style={styles.textStyle}>Getting started with React Native!</Text>
    <Text style={styles.subHeaderTextStyle}>My name is {name} </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45,
        color: `red`,
        opacity: 1,
    },
    subHeaderTextStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;