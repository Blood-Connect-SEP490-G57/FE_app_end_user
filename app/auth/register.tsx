import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { EyeIcon, EyeOffIcon, Icon } from "@/components/ui/icon";
import { useRouter } from "expo-router";
import BackButton from "@/components/ui/backbtn";
import { KeyboardDismissWrapper } from "@/components/ui/KeyboardDismissWrapper";
export default function Register() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Password validation functions
  const hasMinLength = (pass: string) => pass.length >= 8;
  const hasUpperLower = (pass: string) =>
    /[a-z]/.test(pass) && /[A-Z]/.test(pass);
  const hasNumberSpecial = (pass: string) =>
    /[0-9]/.test(pass) && /[!@#$%^&*(),.?":{}|<>]/.test(pass);

  // Add new function to check if password meets all requirements
  const isPasswordValid = (pass: string) => {
    return hasMinLength(pass) && hasUpperLower(pass) && hasNumberSpecial(pass);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardDismissWrapper>
        <View className="pb-5">
          <View className="p-4 flex-row items-center bg-white">
            <BackButton />
            <Heading className="ml-4 text-lg font-semibold">
              Đăng ký tài khoản
            </Heading>
          </View>
          <KeyboardAvoidingView behavior="padding" className="px-2.5">
            <Card
              size="lg"
              variant="elevated"
              className="bg-white my-2.5 px-2.5 bg-gray-100"
            >
              <Text className="mb-1 font-bold" style={{ fontSize: 16 }}>
                Số điện thoại
              </Text>
              <Input variant="outline" size="md" className="mb-2.5">
                <InputField placeholder="Nhập số điện thoại" />
              </Input>

              {/* Password */}
              <Text className="mb-1 font-bold" style={{ fontSize: 16 }}>
                Mật khẩu
              </Text>
              <Input variant="outline" size="md" className="mb-2.5">
                <InputField
                  placeholder="Nhập mật khẩu"
                  secureTextEntry={!showPassword}
                  onChangeText={setPassword}
                  value={password}
                />
                <Button
                  variant="link"
                  onPress={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                >
                  {showPassword ? (
                    <Icon as={EyeOffIcon} size="md" />
                  ) : (
                    <Icon as={EyeIcon} size="md" />
                  )}
                </Button>
              </Input>

              {/* Password Requirements */}
              <View className="mb-2.5 px-2">
                <Text size="xs" className="text-gray-600">
                  Yêu cầu mật khẩu:
                </Text>
                <Text
                  size="xs"
                  className={
                    hasMinLength(password) ? "text-green-600" : "text-red-600"
                  }
                >
                  • Ít nhất 8 ký tự
                </Text>
                <Text
                  size="xs"
                  className={
                    hasUpperLower(password) ? "text-green-600" : "text-red-600"
                  }
                >
                  • Bao gồm chữ hoa và chữ thường
                </Text>
                <Text
                  size="xs"
                  className={
                    hasNumberSpecial(password)
                      ? "text-green-600"
                      : "text-red-600"
                  }
                >
                  • Bao gồm số và ký tự đặc biệt
                </Text>
              </View>

              {/* Confirm Password */}
              <Text className="mb-1 font-bold" style={{ fontSize: 16 }}>
                Xác nhận mật khẩu
              </Text>
              <Input
                variant="outline"
                size="md"
                className="mb-2.5 relative"
                isDisabled={!isPasswordValid(password)}
              >
                <InputField
                  placeholder="Nhập lại mật khẩu"
                  secureTextEntry={!showConfirmPassword}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                />
                <Button
                  variant="link"
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  isDisabled={!isPasswordValid(password)}
                >
                  {showConfirmPassword ? (
                    <Icon as={EyeOffIcon} size="md" />
                  ) : (
                    <Icon as={EyeIcon} size="md" />
                  )}
                </Button>
              </Input>
              {/* Submit Button */}
              <Button
                size="md"
                variant="solid"
                action="negative"
                onPress={() => router.push("/auth/otp")}
                className="mt-5 mb-2.5"
              >
                <ButtonText>Đăng ký</ButtonText>
              </Button>
            </Card>
          </KeyboardAvoidingView>
        </View>
      </KeyboardDismissWrapper>
    </SafeAreaView>
  );
}
