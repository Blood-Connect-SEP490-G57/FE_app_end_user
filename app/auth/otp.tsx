import React from "react";
import {
  View,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
export default function OTP() {
    const router = useRouter();
  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding" style={{ padding: 10 }}>
        <StatusBar hidden />
        <View>
          <Heading size="lg" className="mb-1" style={{ textAlign: "center" }}>
            Nhập mã xác thực
          </Heading>
          <Text style={{ textAlign: "center" }}>
            Nhập mã xác thực đã được gửi
          </Text>
          <Text style={{ textAlign: "center" }}>qua số điện thoại của bạn</Text>
        </View>
        <OtpInput
          numberOfDigits={6}
          onTextChange={(text) => console.log(text)}
          focusColor="red"
          focusStickBlinkingDuration={500}
          theme={{
            pinCodeContainerStyle: {
              backgroundColor: "transparent",
              width: 50,
              height: 50,
              borderRadius: 10,
              marginTop: 30,
            },
          }}
        />
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>
            Không nhận được mã xác thực?
          </Text>
          <TouchableOpacity>
            <Text style={{  color: "red" }}>
              Gửi lại mã
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <Button
          variant="solid"
          size="md"
          className="mt-3"
          action="negative"
          onPress={() => router.push("/account/home")}
        >
            <ButtonText>Xác nhận</ButtonText>
        </Button>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
