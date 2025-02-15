import { Card } from "@/components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Divider } from "@/components/ui/divider";
import { Heading } from "@/components/ui/heading";

// Định nghĩa các menu item
const ACCOUNT_MENU_ITEMS = [
  {
    icon: "account",
    label: "Thông tin cá nhân",
    route: "/profile",
  },
  {
    icon: "history",
    label: "Lịch sử hiến máu",
    route: "/more/history",
  },
  {
    icon: "calendar",
    label: "Lịch hẹn hiến máu",
    route: "/more/schedule",
  },
];

const OTHER_MENU_ITEMS = [
  {
    icon: "star",
    label: "Hỗ trợ",
    route: "/more/support",
  },
  {
    icon: "message",
    label: "Liên hệ",
    route: "/more/contact",
  },
];

// Component cho một menu item
const MenuItem = ({ icon, label, route, isLogout = false }: { icon: string, label: string, route: string, isLogout?: boolean }) => {
  const router = useRouter();
  const textColor = isLogout ? "text-red-500" : "text-gray-700";

  return (
    <TouchableOpacity
      onPress={() => router.push(route as any)}
      className="flex-row items-center justify-between py-3 active:bg-gray-100"
    >
      <View className="flex-row items-center">
        <MaterialCommunityIcons
          name={icon as any}
          size={24}
          className={`${textColor} mr-3`}
        />
        <Text className={textColor}>{label}</Text>
      </View>
      <MaterialCommunityIcons
        name="chevron-right"
        size={24}
        className={textColor}
      />
    </TouchableOpacity>
  );
};

export default function SettingScreen() {
  const router = useRouter();
  
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="p-4 flex-row items-center justify-center bg-white">
        <Heading className="ml-4 text-lg font-semibold">Cài đặt</Heading>
      </View>
      
      <View className="px-4">
        {/* Account Section */}
        <Card className="bg-gray-100 rounded-xl p-4 mb-4">
          <Text className="text-lg font-semibold text-gray-900">Tài khoản</Text>
          <Divider />
          <Card className="bg-gray-100 rounded-xl p-3">
            {ACCOUNT_MENU_ITEMS.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
          </Card>
        </Card>

        {/* Other Section */}
        <Card className="bg-gray-100 rounded-xl p-4">
          <Text className="text-lg font-semibold text-gray-900">Khác</Text>
          <Divider />
          <Card className="bg-gray-100 rounded-xl p-3">
            {OTHER_MENU_ITEMS.map((item, index) => (
              <MenuItem key={index} {...item} />
            ))}
            
            {/* Logout Item */}
            <MenuItem
              icon="logout"
              label="Đăng xuất"
              route="/"
              isLogout={true}
            />
          </Card>
        </Card>
      </View>
    </SafeAreaView>
  );
}
