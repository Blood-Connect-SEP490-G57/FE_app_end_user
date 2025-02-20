import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function AccountLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          ...styles.tabBar,
          elevation: 0,
          borderTopWidth: 0,
          shadowOffset: {
            width: 0,
            height: -2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          shadowColor: '#000',
        },
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
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    backgroundColor: "white",
    borderTopColor: "#ddd",
  },
});
