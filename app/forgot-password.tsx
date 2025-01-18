import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ForgotPassword() {
    return (
        <View style={styles.container}>
        <Text style={styles.text}>Forgot Password Page</Text>
        </View>
    );
    }

const styles = StyleSheet.create({      
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        fontSize: 20,
    },
});