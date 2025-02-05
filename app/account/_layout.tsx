import { Tabs } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Image } from "react-native";

export default function AccountLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: "#FF6347",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          headerShown: false,

        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          tabBarLabel: "Tin tức",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="newspaper" color={color} size={26} />
          ),
          headerShown: false,
        }}

      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          tabBarLabel: "Cài đặt",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 60,
    backgroundColor: "white",
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
});
