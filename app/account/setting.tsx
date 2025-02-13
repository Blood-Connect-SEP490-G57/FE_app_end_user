import { Card } from "@/components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Divider } from "@/components/ui/divider";

export default function SettingScreen() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white pt-5">
      <View className="px-4">
        <Text className="text-xl font-bold text-gray-900 mb-4">Cài đặt</Text>

        <Card className="bg-gray-100 rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-900">
            Tài khoản
          </Text>
          <Divider />
          <Card className="bg-gray-100 rounded-xl p-3">
            {/* Thông tin cá nhân */}
            <TouchableOpacity
              onPress={() => router.push("/profile")}
              className="flex-row items-center justify-between py-3 active:bg-gray-100"
            >
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="account"
                  size={24}
                  className="text-gray-700 mr-3"
                />
                <Text className="text-gray-700">Thông tin cá nhân</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                className="text-gray-500"
              />
            </TouchableOpacity>

            {/* Lịch sử hiến máu */}
            <TouchableOpacity
              onPress={() => router.push("/more/history")}
              className="flex-row items-center justify-between py-3 active:bg-gray-100"
            >
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="history"
                  size={24}
                  className="text-gray-700 mr-3"
                />
                <Text className="text-gray-700">Lịch sử hiến máu</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                className="text-gray-500"
              />
            </TouchableOpacity>

            {/* Lịch hẹn hiến máu */}
            <TouchableOpacity
              onPress={() => router.push("/more/schedule")}
              className="flex-row items-center justify-between py-3 active:bg-gray-100"
            >
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="calendar"
                  size={24}
                  className="text-gray-700 mr-3"
                />
                <Text className="text-gray-700">Lịch hẹn hiến máu</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                className="text-gray-500"
              />
            </TouchableOpacity>
          </Card>
        </Card>

        <Card className="bg-gray-100 rounded-xl p-4">
          <Text className="text-lg font-semibold text-gray-900">Khác</Text>
          <Divider />
          <Card className="bg-gray-100 rounded-xl p-3">
            {/* Hỗ trợ */}
            <TouchableOpacity
              className="flex-row items-center justify-between py-3 active:bg-gray-100"
              onPress={() => router.push("/more/support")}
            >
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="star"
                  size={24}
                  className="text-gray-700 mr-3"
                />
                <Text className="text-gray-700">Hỗ trợ</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                className="text-gray-500"
              />
            </TouchableOpacity>

            {/* Liên hệ */}
            <TouchableOpacity
              onPress={() => router.push("/more/contact")}
              className="flex-row items-center justify-between py-3 active:bg-gray-100"
            >
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="message"
                  size={24}
                  className="text-gray-700 mr-3"
                />
                <Text className="text-gray-700">Liên hệ</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                className="text-gray-500"
              />
            </TouchableOpacity>

            {/* Đăng xuất */}
            <TouchableOpacity
              className="flex-row items-center justify-between py-3 active:bg-gray-100"
              onPress={() => router.push("/")}
            >
              <View className="flex-row items-center">
                <MaterialCommunityIcons
                  name="logout"

                  size={24}
                  className="text-red-500 mr-3"
                />
                <Text className="text-red-500">Đăng xuất</Text>
              </View>
              <MaterialCommunityIcons
                name="chevron-right"
                size={24}
                className="text-red-500"
              />
            </TouchableOpacity>
          </Card>
        </Card>
      </View>
    </SafeAreaView>
  );
}
