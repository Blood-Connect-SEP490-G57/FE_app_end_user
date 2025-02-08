import { SafeAreaView, ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Image } from "@/components/ui/image";
import BackButton from "@/components/ui/backbtn";
export default function History() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* Header với nút Back */}
        <View className="p-4 flex-row items-center bg-gray-100 ">
          <BackButton />
          <Heading className="ml-4 text-lg font-semibold">
            Lịch sử hiến máu
          </Heading>
        </View>
        <Card size="lg" variant="elevated" className="m-3 mb-4 flex-row">
          <View className="flex-row items-center justify-between mr-4">
            <Image

              source={require("@/assets/images/user.png")}
              className="w-20 h-20 rounded-full mx-auto mb-4"
              alt="user"
            />
          </View>
          <View>
            <Heading size="md" className="mb-1">
              Hiến máu - 24-01-2025
            </Heading>
            <Text>Thời gian: 10:00 - 12:00</Text>
            <Text>Địa điểm: Trung tâm y tế Bắc Giang</Text>
            <Text>Trạng thái: Đã hoàn thành</Text>
            <Text>Số lượng máu đã hiến: 2500ml</Text>
          </View>
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}
