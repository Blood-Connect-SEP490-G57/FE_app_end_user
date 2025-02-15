import React from "react";
import {
  View,
  KeyboardAvoidingView,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/components/ui/button";
import { useRouter } from "expo-router";
import { OtpInput } from "react-native-otp-entry";
import BackButton from "@/components/ui/backbtn";
export default function OTP() {
  const router = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header với nút Back */}
      <View className="p-4 flex-row items-center bg-white ">
        <BackButton />
        <Heading className="ml-4 text-lg font-semibold">
          Nhập mã xác thực
        </Heading>
      </View>
      <View className="pb-5">
        <KeyboardAvoidingView
          behavior="padding"
          style={{ padding: 10, backgroundColor: "white" }}
        >
          <StatusBar hidden />
          <View>
            <Text className="text-center">
              Nhập mã xác thực đã được gửi
            </Text>
            <Text className="text-center">
              qua số điện thoại của bạn
            </Text>
          </View>
          <OtpInput
            numberOfDigits={4}
            onTextChange={(text) => console.log(text)}
            focusColor="red"
            type="numeric"
            focusStickBlinkingDuration={500}
            theme={{
              pinCodeContainerStyle: {
                backgroundColor: "transparent",
                width: 65,
                height: 65,
                borderRadius: 12,
                marginTop: 30,
                borderWidth: 1,
                borderColor: '#E5E7EB',
                marginHorizontal: 5,
              },
              pinCodeTextStyle: {
                fontSize: 24,
                color: '#111827',
              }
            }}
          />
          <TouchableOpacity
            className="flex-row items-center justify-center mt-6"
          >
            <Text>Không nhận được mã xác thực ?</Text>
            <TouchableOpacity>
              <Text className="text-red-500 font-bold ml-1"> Gửi lại mã</Text>
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
      </View>
    </SafeAreaView>
  );
}
