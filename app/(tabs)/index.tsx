import { Stack } from "expo-router"; // Import Stack from expo-router for page-level navigation
import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation
import { View } from "@/components/Themed"; // Assuming Themed is a component for theming

const HomePage = () => {
  const isLoggedIn = false; // Replace with your actual authentication logic
  const router = useRouter(); // Use router for navigation

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerTransparent: true,
          headerTitle: "",
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Giọt Máu Hi Vọng</Text>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                if (isLoggedIn) {
                  router.push("/profile"); 
                } else {
                  router.push("/login"); 
                }
              }}
              style={{ marginRight: 20 }}
            >
              <Image
                source={{
                  uri: "https://avatars.githubusercontent.com/u/31965502?v=4", // Placeholder image URL
                }}
                style={{ width: 30, height: 30, borderRadius: 15 }}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
  },
  text: {
    fontSize: 20,
    color: "blue",
  },
});
