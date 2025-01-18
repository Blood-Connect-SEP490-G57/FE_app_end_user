import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { Stack, useRouter } from "expo-router";

export default function Login() {
  const router = useRouter();
  const [CCCD, setCCCD] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Kiểm tra điều kiện đăng nhập, ví dụ như không để trống trường CCCD và password
    if (!CCCD || !password) {
      Alert.alert("Lỗi", "Cần điền cả thông tin Căn cước công dân và mật khẩu");
      return;
    }
    // Logic xử lý đăng nhập sẽ được thêm vào ở đây
    router.push("/");
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

        {/* CCCDCCCD Input */}
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
        {/* Remember me */}
        <View style={{ flexDirection: "row", alignItems: "center" , marginBottom: 20}}>
          <Text style={{ marginRight: 10 }}>Ghi nhớ tài khoản</Text>
          <TouchableOpacity>
            <Text style={{ color: "#3498DB" }}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>
        {/* Login Button */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Đăng nhập</Text>
        </TouchableOpacity>
        <Text style={{ marginTop: 20 }}>
          Chưa có tài khoản?
          <Text style={{ color: "#3498DB" }}> Đăng ký ngay</Text>
        </Text>
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
    textAlign: "left",  // Add this to left-align the text
    width: "100%",  // Ensures the label uses the full width of the container
  },
});
