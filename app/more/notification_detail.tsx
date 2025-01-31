import { View } from "react-native";
import { Text } from "@/components/ui/text";
export default function NotificationDetail() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-2xl font-bold text-center">
        Notification Detail
      </Text>
      <Text className="text-lg text-center">
        This is the detail of the notification.
      </Text>
    </View>
  );
}
