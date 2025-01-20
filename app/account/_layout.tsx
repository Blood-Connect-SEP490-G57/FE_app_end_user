import { Tabs } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AccountLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
          tabBarActiveTintColor: "#FF6347",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarLabel: "Tìm kiếm",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
          tabBarActiveTintColor: "#FF6347",
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
          tabBarActiveTintColor: "#FF6347",
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
          tabBarActiveTintColor: "#FF6347",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
