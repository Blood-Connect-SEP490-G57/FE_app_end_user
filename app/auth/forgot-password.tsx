import { ButtonText, Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input, InputField } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { router } from "expo-router";
import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Forgot_password() {
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding" style={{ padding: 10 }}>
        <Card size="lg" variant="elevated" className="m-3 bg-white">
          <Text style={{ textAlign: "center" }} className="text-lg mb-4">
            Nhập CCCD và Số điện thoại để xác minh thông tin tài khoản
          </Text>
          <Text>CCCD</Text>
          <Input
            variant="outline"
            size="md"
            className="mb-2"
            style={{ marginBottom: 10 }}
          >
            <InputField placeholder="Nhập CCCD " />
          </Input>
          <Text>Số điện thoại</Text>
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
