import { Heading } from "@/components/ui/heading";
import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text } from "@/components/ui/text";
import { Image } from "@/components/ui/image";
import { Card } from "@/components/ui/card";
import { Divider } from "@/components/ui/divider";
export default function ProfileScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Heading className="text-center text-2xl font-bold mb-4">Thông tin cá nhân</Heading>
        <Image source={require("@/assets/images/user.png")} className="w-20 h-20 rounded-full mx-auto mb-4" />
        <Card className="p-4 mx-4 mb-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="text-lg font-bold">Thông tin cá nhân</Text>
            <TouchableOpacity>
              <Text className="text-lg font-bold text-blue-500 underline">
                Chỉnh sửa
              </Text>
            </TouchableOpacity>
          </View>
          <Divider />
          <View className="flex-row items-center justify-between mt-3">
            <Text className="text-lg font-bold">CCCD:</Text>
            <Text className="text-lg text-gray-500">12654321</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Họ tên:</Text>
            <Text className="text-lg text-gray-500">Nguyễn Văn A</Text>
          </View>
          
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Giới tính:</Text>
            <Text className="text-lg text-gray-500">Nam</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Ngày sinh:</Text>
            <Text className="text-lg text-gray-500">12/12/2000</Text>
          </View>
         
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Nhóm máu:</Text>
            <Text className="text-lg text-gray-500">-</Text>
          </View>
        </Card>

        <Card className="p-4 mx-4 mb-4">
          <Text className="text-lg font-bold mb-3">Thông tin liên hệ</Text>
          <Divider />
          <View className="flex-row items-center justify-between mt-3">
            <Text className="text-lg font-bold">Địa chỉ:</Text>
            <Text className="text-lg text-gray-500">123 Đường ABC, Quận 1, TP.HCM</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Email:</Text>
            <Text className="text-lg text-gray-500">nguyenvana@gmail.com</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Số điện thoại:</Text>
            <Text className="text-lg text-gray-500">0987654321</Text>
          </View>
          <View className="flex-row items-center justify-between">
            <Text className="text-lg font-bold">Nghề nghiệp:</Text>
            <Text className="text-lg text-gray-500">Công an</Text>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
