import { SafeAreaView, ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import BackButton from "@/components/ui/backbtn";
export default function History() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView>
        {/* Header với nút Back */}
        <View className="p-4 flex-row items-center bg-white ">
          <BackButton />
          <Heading className="ml-4 text-lg font-semibold">
            Lịch sử hiến máu
          </Heading>
        </View>
        <Card
          size="lg"
          variant="elevated"
          className="m-3 mb-4 flex-row bg-gray-100"
        >
          <View className="flex-row items-center justify-between mr-4">
            <Image
              source={require("@/assets/images/user.png")}
              className="w-20 h-20 rounded-full mx-auto mb-4"
              alt="user"
            />
          </View>
          <View className="flex-1">
            <Heading size="md" className="mb-2">
              Hiến máu - 24-01-2025
            </Heading>
            <View className="space-y-1">
              <View className="flex-row">
                <Text className="text-gray-500">Thời gian: </Text>
                <Text className="font-semibold text-gray-700">10:00 - 12:00</Text>
              </View>
              <View className="flex-row">
                <Text className="text-gray-500">Địa điểm: </Text>
                <Text className="font-semibold text-gray-700">Trung tâm y tế Bắc Giang</Text>
              </View>
              <View className="flex-row">
                <Text className="text-gray-500">Trạng thái: </Text>
                <Text className="font-bold" style={{ color: "#008000" }}>
                  Đã hoàn thành
                </Text>
              </View>
              <View className="flex-row mt-1">
                <Text className="text-gray-500">Số lượng máu đã hiến: </Text>
                <Text className="font-bold" style={{ color: "red" }}>
                  250ml
                </Text>
              </View>
            </View>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
