import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { router } from "expo-router";

export default function NewsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="space-y-4 px-4 py-4">
        {/* News Card 1 */}
        <Card className="p-4 bg-gray-100 rounded-xl mb-4">
          <TouchableOpacity
            className="space-y-3"
            onPress={() => router.push("/more/news_detail")}
          >
            <Heading className="text-xl font-bold text-gray-800">
              Tin tức
            </Heading>
            <Text className="text-sm text-gray-500">
              2025-02-05 10:00 - Tác giả: Nguyễn Văn A
            </Text>
            <Image
              source={require("@/assets/images/user.png")}
              alt="news-img"
              className="w-full h-40 rounded-lg"
            />
            <Text className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Quisquam, quos.
            </Text>
            <Text className="text-white text-center font-semibold">
              Đọc thêm
            </Text>
          </TouchableOpacity>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
