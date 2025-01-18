import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Stack } from "expo-router";

export default function ForgotPassword() {
  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "Quên mật khẩu",
          headerTitleAlign: "center",
        }}
      />
      <View>
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
