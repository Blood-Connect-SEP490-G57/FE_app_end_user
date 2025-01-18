import { Stack } from "expo-router";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router"; // Import useRouter for navigation

const HomePage = () => {
  const isLoggedIn = true; // Replace with your authentication logic
  const router = useRouter(); // Get the router for navigation

  return (
    <Stack.Screen
      options={{
        headerTransparent: true,
        headerTitle: "",
        headerLeft: () => (
          <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
            <Text>Giọt Máu Hi Vọng</Text>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              // Navigate to profile if logged in, otherwise navigate to login
              if (isLoggedIn) {
                router.push("/profile"); // Replace with your profile screen path
              } else {
                router.push("/login"); // Replace with your login screen path
              }
            }}
            style={{ marginRight: 20 }}
          >
            <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/31965502?v=4",
              }}
              style={{ width: 30, height: 30, borderRadius: 15 }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "blue",
  },
});
