import { Card } from "@/components/ui/card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Cài đặt</Text>
        
        <Card style={styles.card}>
          <Text style={styles.sectionHeader}>Tài khoản</Text>
          
          <Card style={styles.innerCard}>
            {/* Thông tin cá nhân */}
            <TouchableOpacity style={styles.touchable}>
              <MaterialCommunityIcons name="account" style={styles.icon} />
              <Text style={styles.text}>Thông tin cá nhân</Text>
              <MaterialCommunityIcons name="arrow-right" style={styles.icon} />
            </TouchableOpacity>

            {/* Lịch sử hiến máu */}
            <TouchableOpacity style={styles.touchable}>
              <MaterialCommunityIcons name="history" style={styles.icon} />
              <Text style={styles.text}>Lịch sử hiến máu</Text>
              <MaterialCommunityIcons name="arrow-right" style={styles.icon} />
            </TouchableOpacity>

            {/* Lịch hẹn hiến máu */}
            <TouchableOpacity style={styles.touchable}>
              <MaterialCommunityIcons name="calendar" style={styles.icon} />
              <Text style={styles.text}>Lịch hẹn hiến máu</Text>
              <MaterialCommunityIcons name="arrow-right" style={styles.icon} />
            </TouchableOpacity>
          </Card>
        </Card>
        <Card style={styles.card}>
          <Text style={styles.sectionHeader}>Khác</Text>
          
          <Card style={styles.innerCard}>
            {/* Thông tin cá nhân */}
            <TouchableOpacity style={styles.touchable}>
              <MaterialCommunityIcons name="star" style={styles.icon} />
              <Text style={styles.text}>Đánh giá app</Text>
              <MaterialCommunityIcons name="arrow-right" style={styles.icon} />
            </TouchableOpacity>

            {/* Lịch sử hiến máu */}
            <TouchableOpacity style={styles.touchable}>
              <MaterialCommunityIcons name="history" style={styles.icon} />
              <Text style={styles.text}>Liên hệ</Text>
              <MaterialCommunityIcons name="arrow-right" style={styles.icon} />
            </TouchableOpacity>
            {/* Đăng xuất */}
            <TouchableOpacity style={styles.touchable}>
              <MaterialCommunityIcons name="logout" style={styles.icon} />
              <Text style={styles.text}>Đăng xuất</Text>
              <MaterialCommunityIcons name="arrow-right" style={styles.icon} />
            </TouchableOpacity>
          </Card>
        </Card>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  content: {
    padding: 10,
  },
  header: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 10,
  },
  card: {
    marginTop: 10,
    padding: 10,
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  innerCard: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
  },
  touchable: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  icon: {
    marginRight: 10,
    color: "#333",
  },
  text: {
    flex: 1,
    fontSize: 14,
  },
});
