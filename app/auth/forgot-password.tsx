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
        <View>
          <Text size="lg" bold style={{ textAlign: "center" }}>Quên mật khẩu</Text>
          <Text style={{ textAlign: "center" }}>
            Nhập CCCD và Số điện thoại
          </Text>
        </View>
        <Card size="lg" variant="outline" className="m-3">
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
        </Card>
        <Button
          variant="solid"
          size="md"
          action="negative"
          onPress={() => router.push("/auth/otp")}
        >
          <ButtonText>Send OTP</ButtonText>
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
