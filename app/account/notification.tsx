import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import BackButton from "@/components/ui/backbtn";
import { Heading } from "@/components/ui/heading";
export default function Notification() {
  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'unread' | 'read'


  const NotificationItem = () => (
    <TouchableOpacity
      className="bg-white mx-4 my-2 p-4 rounded-xl active:bg-gray-50"
      onPress={() => router.push("/more/notification_detail")}
    >
      <View className="space-y-2">
        <View className="flex-row items-center justify-between">
          <Text className="text-base font-semibold text-gray-900">
            Thông báo mới
          </Text>
          <View className="h-2 w-2 rounded-full bg-red-500" />
        </View>
        <Text className="text-sm text-gray-600 leading-5">
          Bạn có một thông báo mới từ hệ thống

        </Text>
        <Text className="text-xs text-red-500">2 giờ trước</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        {/* Filter Section */}
        <View className="py-3 bg-white">
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            className="flex-row gap-3"
          >
            <TouchableOpacity
              className={`py-2 px-6 mt-6 mr-3 rounded-full ${
                activeFilter === "all" ? "bg-red-500" : "bg-gray-100"
              }`}
              onPress={() => setActiveFilter("all")}
            >
              <Text
                className={`${
                  activeFilter === "all"
                    ? "text-white font-medium"
                    : "text-gray-600"
                }`}
              >
                Tất cả
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`py-2 px-6 mt-6 mr-3 rounded-full ${
                activeFilter === "unread" ? "bg-red-500" : "bg-gray-100"
              }`}
              onPress={() => setActiveFilter("unread")}
            >

              <Text
                className={`${
                  activeFilter === "unread"
                    ? "text-white font-medium"
                    : "text-gray-600"
                }`}
              >
                Chưa đọc
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className={`py-2 px-6 mt-6 mr-3 rounded-full ${
                activeFilter === "read" ? "bg-red-500" : "bg-gray-100"
              }`}
              onPress={() => setActiveFilter("read")}

            >
              <Text
                className={`${
                  activeFilter === "read"
                    ? "text-white font-medium"
                    : "text-gray-600"
                }`}
              >
                Đã đọc
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Notifications List */}
        <ScrollView className="flex-1 pt-2">
          <NotificationItem />
          <NotificationItem />
          <NotificationItem />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
