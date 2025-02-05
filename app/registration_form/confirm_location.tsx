import { ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { ButtonText } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import { router } from "expo-router";
export default function ConfirmLocation() {
  return (
    <ScrollView className="w-full rounded-md border border-background-200 p-4">
      <Text className="text-2xl font-bold">Thời gian và địa điểm hiến máu</Text>
      <Card className="p-4 mt-4">

        <Text className="  text-gray-500">Thời gian: 10:00 - 12:00</Text>
        <Text className="  text-gray-500">Trung tâm y tế tỉnh Ninh Bình</Text>
        <Text className="  text-gray-500">
          Địa điểm: 123 Đường ABC, Quận 1, TP.HCM
        </Text>
        <Text className="  text-gray-500">
          Thời gian hoạt động: 10:00 - 12:00
        </Text>

        <Divider className="my-4" />
        <Text className="  text-gray-500">Nhóm máu:</Text>
        <View className="flex-row flex-wrap justify-between">
          <Card className="flex-1 m-2 ">
            <Text className="  text-gray-500 bg-background-200 rounded-md p-2 text-center">
              A
            </Text>
          </Card>
          <Card className="flex-1 m-2">
            <Text className="  text-gray-500 bg-background-200 rounded-md p-2 text-center">
              AB
            </Text>
          </Card>
          <Card className="flex-1 m-2">
            <Text className="  text-gray-500 bg-background-200 rounded-md p-2 text-center">
              B
            </Text>
          </Card>
          <Card className="flex-1 m-2">
            <Text className="  text-gray-500 bg-background-200 rounded-md p-2 text-center">
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
    </ScrollView>
  );
}
