import { SafeAreaView, ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { ButtonText } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { router } from "expo-router";
import BackButton from "@/components/ui/backbtn";
import { Heading } from "@/components/ui/heading";
export default function ConfirmLocation() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Header với nút Back */}
        <View className="p-4 flex-row items-center bg-white ">
          <BackButton />
          <Heading className="ml-4 text-lg font-semibold">
            Thời gian và địa điểm hiến máu
          </Heading>
        </View>
        <View className="px-4 ">
          <Card className="p-4 mt-4 bg-gray-100">
            <Heading size="md" className="mb-4">
              Hiến máu tại trung tâm y tế tỉnh Ninh Bình
            </Heading>
            <Text className="text-gray-500">Thời gian: 10:00 - 12:00</Text>
            <Text className="text-gray-500">Trung tâm y tế tỉnh Ninh Bình</Text>
            <Text className="text-gray-500">
              Địa điểm: 123 Đường ABC, Quận 1, TP.HCM
            </Text>
            <Text className="text-gray-500">
              Thời gian hoạt động: 10:00 - 12:00
            </Text>

            <Divider className="my-4" />
            <Text className="text-gray-500">Nhóm máu:</Text>
            <View className="flex-row flex-wrap justify-between">
              <Card className="flex-1 m-2 bg-gray-100">
                <Text className="text-gray-500 bg-background-200 rounded-md p-2 text-center">
                  A
                </Text>
              </Card>
              <Card className="flex-1 m-2 bg-gray-100">
                <Text className="text-gray-500 bg-background-200 rounded-md p-2 text-center">
                  AB
                </Text>
              </Card>
              <Card className="flex-1 m-2 bg-gray-100">
                <Text className="text-gray-500 bg-background-200 rounded-md p-2 text-center">
                  B
                </Text>
              </Card>
              <Card className="flex-1 m-2 bg-gray-100 ">
                <Text className="text-gray-500 bg-background-200 rounded-md p-2 text-center">
                  O
                </Text>
              </Card>
            </View>

            <Divider className="my-4" />
            <Text className="  text-gray-500">Số người đã đăng ký: 10/100</Text>
            <Button
              size="md"
              variant="solid"
              action="negative"
              className="mt-4"
              onPress={() => {
                router.push("/registration_form/registration_form");
              }}
            >
              <ButtonText>Tiếp tục</ButtonText>
            </Button>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
