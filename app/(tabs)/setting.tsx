import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Setting = () => {
  return (
    <View style={styles.container}>
     <Stack.Screen 
      options={{
        headerTransparent: true,
        headerTitle: "Cài đặt",
      }}
     />
      <Text style={styles.text}>Setting Page</Text>
    </View>
  );
};

export default Setting;

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
