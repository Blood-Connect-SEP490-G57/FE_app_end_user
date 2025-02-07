import { SafeAreaView, ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";
import BackButton from "@/components/ui/backbtn";
import { Heading } from "@/components/ui/heading";
export default function NotificationDetail() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-4 flex-row items-center bg-gray-100 ">
          <BackButton />
          <Heading className="ml-4 text-lg font-semibold">Thông báo</Heading>
        </View>
        <Text className="text-2xl font-bold text-center">
          Notification Detail
        </Text>

        <Text className="text-lg px-4">
          This is the detail of the notification.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
