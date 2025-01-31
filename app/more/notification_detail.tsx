import { View } from "react-native";
import { Text } from "@/components/ui/text";
export default function NotificationDetail() {
  return (
    <View className="flex-1">
      <Text className="text-2xl font-bold text-center">
        Notification Detail
      </Text>
      <Text className="text-lg px-4">
        This is the detail of the notification.
      </Text>
    </View>
  );
}
