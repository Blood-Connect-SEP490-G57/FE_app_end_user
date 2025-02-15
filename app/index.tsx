import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Heading } from "@/components/ui/heading";
import {
  Checkbox,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
} from "@/components/ui/checkbox";
import { useState } from "react";
import { CheckIcon, EyeIcon, EyeOffIcon, Icon } from "@/components/ui/icon";
import { KeyboardDismissWrapper } from "@/components/ui/KeyboardDismissWrapper";
export default function LoginScreen() {
  const router = useRouter();
  const [rememberPassword, setRememberPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View className="flex-1 bg-white">
      {/* <StatusBar barStyle="dark-content" /> */}
        <ImageBackground
          source={require("@/assets/images/background/bg.jpg")}
          className="absolute inset-0 w-full h-full"
        />
        <KeyboardDismissWrapper>
          <KeyboardAvoidingView
            className="flex-1 p-4 mt-10"
            behavior="padding"
            style={{ padding: 20 }}
          >
            <View className="flex-1 mt-10">
              <Image
                source={require("@/assets/images/user.png")}
                alt="logo"
                className="self-center w-32 h-32 mb-6"
              />
              <Card className="p-4">
                <Heading size="xl" bold className="text-center mb-4">
                  Đăng nhập
                </Heading>
                <Text size="md" bold>
                  Số điện thoại
                </Text>

                <Input variant="outline" size="lg" className="mb-4">
                  <InputField
                    placeholder="Nhập số điện thoại"
                    onChangeText={setPhone}
                    value={phone}
                    keyboardType="numeric"
                  />
                </Input>
                <Text size="md" bold>
                  Mật khẩu
                </Text>
                <Input variant="outline" size="lg" className="mb-2.5">
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
                      <Icon as={EyeOffIcon} size="lg" />
                    ) : (
                      <Icon as={EyeIcon} size="lg" />
                    )}
                  </Button>
                </Input>
                <View className="flex-row items-center justify-between mb-4">
                  <View className="flex-row items-center flex-1">
                    <Checkbox
                      size="md"
                      isInvalid={false}
                      isDisabled={false}
                      value={rememberPassword.toString()}
                      onChange={setRememberPassword}
                    >
                      <CheckboxIndicator>
                        <CheckboxIcon as={CheckIcon} />
                      </CheckboxIndicator>
                      <CheckboxLabel>Ghi nhớ mật khẩu</CheckboxLabel>
                    </Checkbox>
                  </View>
                  <Button
                    size="sm"
                    variant="link"
                    action="negative"
                    onPress={() => router.push("/auth/forgot-password")}
                  >
                    <ButtonText className="font-bold">
                      Quên mật khẩu?
                    </ButtonText>
                  </Button>
                </View>

                <Button
                  size="md"
                  variant="solid"
                  action="negative"
                  onPress={() => router.push("/account/home")}
                >
                  <ButtonText>Đăng nhập</ButtonText>
                </Button>
                <View className="flex-row justify-center mt-9">
                  <Text>Chưa có tài khoản? </Text>
                  <TouchableOpacity
                    onPress={() => router.push("/auth/register")}
                  >
                    <Text className="font-bold text-red-500">Đăng ký ngay</Text>
                  </TouchableOpacity>
                </View>
              </Card>
            </View>
          </KeyboardAvoidingView>
        </KeyboardDismissWrapper>
    </View>
  );
}
