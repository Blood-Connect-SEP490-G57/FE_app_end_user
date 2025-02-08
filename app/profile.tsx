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
import BackButton from "@/components/ui/backbtn";
import { useRouter } from "expo-router";

export default function ProfileScreen() {
  const router = useRouter();
  const imageItem = () => {
    return (
      <View style={styles.profileImageContainer} className="mt-4">
        <Image
          source={require("@/assets/images/user.png")}
          alt="user"
          className="w-24 h-24 rounded-full"
        />
      </View>
    );
  };

  const InfoItem = () => {
    return (
      <View>
        <Card className="p-6 mx-4 mb-6  bg-white rounded-xl">
          <View className="flex-row items-center justify-between">
            <Text className="text-xl font-semibold text-gray-700">
              Thông tin cá nhân
            </Text>
            <TouchableOpacity>
              <Text className="text-lg font-medium text-blue-600">
                Chỉnh sửa
              </Text>
            </TouchableOpacity>

          </View>
          <Divider />
          <View style={styles.infoRow} className="mt-4">
            <Text className="text-lg font-semibold">CCCD:</Text>
            <Text className="text-lg text-gray-500">12654321</Text>
          </View>
          <View style={styles.infoRow}>
            <Text className="text-lg font-semibold">Họ tên:</Text>
            <Text className="text-lg text-gray-500">Nguyễn Văn A</Text>
          </View>
          <View style={styles.infoRow}>
            <Text className="text-lg font-semibold">Giới tính:</Text>
            <Text className="text-lg text-gray-500">Nam</Text>
          </View>
          <View style={styles.infoRow}>
            <Text className="text-lg font-semibold">Ngày sinh:</Text>
            <Text className="text-lg text-gray-500">12/12/2000</Text>
          </View>
          <View style={styles.infoRow}>
            <Text className="text-lg font-semibold">Nhóm máu:</Text>
            <Text className="text-lg text-gray-500">-</Text>
          </View>
        </Card>

        <Card className="p-6 mx-4 mb-6 bg-white rounded-xl">
          <Text className="text-xl font-semibold text-gray-700 ">
            Thông tin liên hệ
          </Text>
          <Divider />
          <View style={styles.infoRow} className="mt-4">
            <Text className="text-lg font-semibold">Địa chỉ:</Text>
            <Text className="text-lg text-gray-500">
              123 Đường ABC, Quận 1, TP.HCM
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text className="text-lg font-semibold">Email:</Text>
            <Text className="text-lg text-gray-500">nguyenvana@gmail.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Text className="text-lg font-semibold">Số điện thoại:</Text>
            <Text className="text-lg text-gray-500">0987654321</Text>
          </View>
          <View style={styles.infoRow}>
            <Text className="text-lg font-semibold">Nghề nghiệp:</Text>
            <Text className="text-lg text-gray-500">Công an</Text>
          </View>
        </Card>
      </View>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Header với nút Back */}
      <View className="p-4 flex-row items-center bg-gray-100 ">
        <BackButton />
        <Heading className="ml-4 text-lg font-semibold">
          Thông tin cá nhân
        </Heading>
      </View>
      {/* Nội dung */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {imageItem()}
        {InfoItem()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 20,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
});
