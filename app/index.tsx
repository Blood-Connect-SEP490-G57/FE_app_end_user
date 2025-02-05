import {
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Text } from "@/components/ui/text";
import {
  Button,
  ButtonText,
} from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
export default function LoginScreen() {
  const router = useRouter();

  return (
    <SafeAreaView>
      <KeyboardAvoidingView behavior="padding" style={{ padding: 20 }}>
        <ScrollView>
          <Image 
            source={require("@/assets/images/user.png")} 
            alt="logo"
            className="self-center w-32 h-32 mb-6" 
          />
          <Card className="p-4">
            <Text
              size="xl"

              bold
              style={{ textAlign: "center", marginBottom: 20 }}
            >
              Đăng nhập
            </Text>
            <Text size="md" bold>
              Nhập CCCD/CMT
            </Text>

            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
              style={{ marginBottom: 20 }}
            >
              <InputField placeholder="Nhập CCCD/CMT" />
            </Input>
            <Text size="md" bold>
              Mật khẩu
            </Text>
            <Input
              variant="outline"
              size="md"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField placeholder="Nhập mật khẩu" />
            </Input>

            <Button
              size="sm"
              variant="link"
              action="negative"
              style={{ alignSelf: "flex-end" }}
              onPress={() => router.push("/auth/forgot-password")}
            >
              <ButtonText style={{ fontWeight: "bold" }}>
                Quên mật khẩu?
              </ButtonText>
            </Button>

            <Button
              size="md"
              variant="solid"
              action="negative"
              onPress={() => router.push("/account/home")}
            >
              <ButtonText>Đăng nhập</ButtonText>
            </Button>
            <View
              style={{
                flexDirection: "row",
                marginTop: 4,
                justifyContent: "center",
              }}
            >
              <Text>Chưa có tài khoản? </Text>
              <TouchableOpacity onPress={() => router.push("/auth/register")}>
                <Text style={{ fontWeight: "bold", color: "red" }}>
                  Đăng ký ngay
                </Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row justify-center mt-9">
              <Text>
                Phiên bản thử nghiệm 1.0.0
              </Text>

            </View>
          </Card>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
