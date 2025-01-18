import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from "react-native";
import { Stack, useRouter } from "expo-router";
export default function Login() {
  const router = useRouter();
  const [CCCD, setCCCD] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!CCCD || !password) {
      Alert.alert("Lỗi", "Cần điền cả thông tin Căn cước công dân và mật khẩu");
      return;
    }
    router.push("/"); // Navigate to home
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "Giọt Máu hi vọng",
          headerTitleAlign: "center",
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Đăng nhập</Text>

        {/* CCCD Input */}
        <Text style={styles.titles}>Nhập CCCD/CMT</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập CCCD/CMT"
          value={CCCD}
          onChangeText={setCCCD}
          keyboardType="number-pad"
        />

        {/* Password Input */}
        <Text style={styles.titles}>Nhập mật khẩu</Text>
        <TextInput
          style={styles.input}
          placeholder="Nhập Mật khẩu"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        {/* Remember me and Forgot Password */}
        <View style={styles.rememberContainer}>
          <View style={styles.checkboxContainer}>
            {/* Add CheckBox here if required */}
            <Text style={styles.rememberText}>Ghi nhớ tài khoản</Text>
          </View>
          <TouchableOpacity onPress={() => router.push("/forgot-password")}>
            <Text style={styles.forgotPasswordText}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>

        {/* Register Link */}
        <View style={styles.registerContainer}>
          <Text>Chưa có tài khoản? </Text>
          <TouchableOpacity onPress={() => router.push("/register")}>
            <Text style={styles.registerText}>Đăng ký ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 40,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#BDC3C7",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#3498DB",
    width: "100%",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  titles: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left", // Left-align the labels
    width: "100%", // Ensures labels take up full width
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rememberText: {
    fontSize: 16,
    marginLeft: 10, // Space between checkbox and text
  },
  forgotPasswordText: {
    color: "#3498DB",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 10, // Add some space between text and link
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  registerText: {
    color: "#3498DB",
  },
});
