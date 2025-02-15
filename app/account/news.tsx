import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import { router } from "expo-router";

// Tạo component NewsCard riêng biệt
const NewsCard = ({ title, date, author, image, content }: { title: string, date: string, author: string, image: any, content: string }) => (
  <Card className="p-4 bg-gray-100 rounded-xl mb-4">
    <TouchableOpacity
      className="space-y-3"
      onPress={() => router.push("/more/news_detail")}
    >
      <Heading className="text-xl font-bold text-gray-800">{title}</Heading>
      <Text className="text-sm text-gray-500">
        {date} - Tác giả: {author}
      </Text>
      <Image source={image} alt="news-img" className="w-full h-40 rounded-lg mt-2 mb-2" />
      <Text className="text-gray-700">{content}</Text>
      <View className="bg-blue-500 py-2 rounded-lg self-end mt-2">
        <Text className="text-white text-center font-semibold">Đọc thêm</Text>
      </View>
    </TouchableOpacity>
  </Card>
);

// Mock data cho tin tức
const newsData = [
  {
    title: "Tin tức mới nhất",
    date: "2025-02-05 10:00",
    author: "Nguyễn Văn A",
    image: require("@/assets/images/user.png"),
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, quos.",
  },
  // Có thể thêm nhiều tin tức khác ở đây
];

export default function NewsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 flex-row items-center justify-center bg-white">
        <Heading className="ml-4 text-lg font-semibold">Tin tức</Heading>
      </View>
      <ScrollView className="space-y-4 px-4 py-4">
        {newsData.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
