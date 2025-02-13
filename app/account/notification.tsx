import React, { useState } from "react";
import { View, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
export default function Notification() {
  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'unread' | 'read'

  const NotificationItem = () => (
    <TouchableOpacity
      className="bg-white mx-4 my-2 rounded-xl active:bg-gray-50"
      onPress={() => router.push("/more/notification_detail")}
    >
      <View className="space-y-2 bg-gray-100 rounded-xl p-4">
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
  const filterSection = () => {
    return (
      <View>
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
              Nhắc nhở
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`py-2 px-6 mt-6 mr-3 rounded-full ${
              activeFilter === "event" ? "bg-red-500" : "bg-gray-100"
            }`}
            onPress={() => setActiveFilter("event")}
          >
            <Text
              className={`${
                activeFilter === "event"
                  ? "text-white font-medium"
                  : "text-gray-600"
              }`}
            >
              Sự kiện
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className={`py-2 px-6 mt-6 mr-3 rounded-full ${
              activeFilter === "news" ? "bg-red-500" : "bg-gray-100"
            }`}
            onPress={() => setActiveFilter("news")}
          >
            <Text
              className={`${
                activeFilter === "news"
                  ? "text-white font-medium"
                  : "text-gray-600"
              }`}
            >
              Tin tức
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  };
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Filter Section */}
        {filterSection()}
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
