import { ButtonText, Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import React from "react";
import { View, KeyboardAvoidingView, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/ui/backbtn";
import { Heading } from "@/components/ui/heading";
export default function Forgot_password() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header với nút Back */}
      <View className="flex-row items-center bg-white ">
        <BackButton />
        <Heading className="ml-4 text-lg font-semibold">Quên mật khẩu</Heading>
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        style={{ padding: 10 }}
        className="bg-white"
      >
        <Card size="lg" variant="elevated" className="m-3 bg-gray-100">
          <Text style={{ textAlign: "center" }} className="text-lg mb-4">
            Nhập số điện thoại để xác minh thông tin tài khoản và nhận mã OTP
          </Text>
          <Text className="text-lg font-bold mb-2">Số điện thoại</Text>
          <Input
            variant="outline"
            size="md"
            className="mb-2"
            style={{ marginBottom: 10 }}
          >
            <InputField placeholder="Nhập số điện thoại " />
          </Input>
          <Button
            variant="solid"
            size="md"
            action="negative"
            onPress={() => router.push("/auth/otp")}
          >
            <ButtonText>Gửi mã OTP</ButtonText>
          </Button>
        </Card>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
