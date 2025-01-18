import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { router, Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "@/components/Themed";

// Define a type for form data
interface FormData {
  name: string;
  CCCD: number;
  phone: number;
  dob: Date;
  sex: boolean;
  email: string;
  address: string;
  password: string;
  bloodtype: string;
  agency: string;
  code: string;
  job: string;
  rePassword: string;
}

export default function Register() {
  // Using useState with the correct type for form data
  const [formData, setFormData] = useState<FormData>({
    name: "",
    CCCD: 0,
    phone: 0,
    dob: new Date(),
    sex: false,
    email: "",
    address: "",
    password: "",
    bloodtype: "",
    agency: "",
    code: "",
    job: "",
    rePassword: "",
  });

  // Function to handle input changes
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleRegister = () => {
    if (
      !formData.name ||
      !formData.CCCD ||
      !formData.phone ||
      !formData.dob ||
      !formData.address ||
      !formData.password ||
      !formData.job ||
      !formData.rePassword
    ) {
      Alert.alert("Lỗi", "Cần điền đầy đủ thông tin!");
      return;
    }
    // You can add validation logic here before submitting the form
    if (formData.password !== formData.rePassword) {
      Alert.alert("Lỗi", "Mật khẩu và xác nhận mật khẩu không khớp!");
      return;
    }
    // Assuming registration is successful, we can alert or proceed with API call
    Alert.alert("Đăng ký thành công!");
    router.push("/login");
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <Stack.Screen
            options={{
              headerStyle: {
                backgroundColor: "transparent",
              },
              headerTransparent: true,
              headerTitle: "Đăng ký tài khoản",
              headerTitleAlign: "center",
            }}
          />

          {/* CCCD Input */}
          <Text style={styles.titles}>Nhập CCCD/CMT</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập CCCD/CMT"
            value={formData.CCCD.toString()}
            onChangeText={(text) => handleInputChange("CCCD", text)}
            keyboardType="number-pad"
          />

          {/* Name Input */}
          <Text style={styles.titles}>Nhập Họ và tên</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập Họ và Tên"
            value={formData.name}
            onChangeText={(text) => handleInputChange("name", text)}
          />

          {/* Phone Input */}
          <Text style={styles.titles}>Nhập Số điện thoại</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập Số điện thoại"
            value={formData.phone.toString()}
            onChangeText={(text) => handleInputChange("phone", text)}
            keyboardType="number-pad"
          />

          {/* Date of Birth Input */}
          <Text style={styles.titles}>Nhập ngày sinh</Text>

          <TextInput
            style={styles.input}
            placeholder="Nhập ngày sinh"
            value={formData.dob.toString()}
            onChangeText={(text) => handleInputChange("dob", text)}
            keyboardType="number-pad"
          />

          {/*Nhập giới tính*/}
          <Text style={styles.titles}>Nhập giới tính</Text>
          <TextInput style={styles.input} placeholder="Nhập giới tính" />

          {/*Nhập email*/}
          <Text style={styles.titles}>Nhập email</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập email"
            value={formData.email}
            onChangeText={(text) => handleInputChange("email", text)}
          />

          {/*Nhập địa chỉ*/}
          <Text style={styles.titles}>Nhập địa chỉ</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập địa chỉ"
            value={formData.address}
            onChangeText={(text) => handleInputChange("address", text)}
          />

          {/*Nhập nhóm máu*/}
          <Text style={styles.titles}>Nhập nhóm máu</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập nhóm máu"
            value={formData.bloodtype}
            onChangeText={(text) => handleInputChange("bloodtype", text)}
          />

          {/*Nhập cơ quan*/}
          <Text style={styles.titles}>Nhập cơ quan</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập cơ quan"
            value={formData.agency}
            onChangeText={(text) => handleInputChange("agency", text)}
          />

          {/*Nhập mã số */}
          <Text style={styles.titles}>
            Nhập mã số sinh viên/ Mã số quân nhân
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập mã số sinh viên/ Mã số quân nhân"
            value={formData.code}
            onChangeText={(text) => handleInputChange("code", text)}
          />

          {/*Nhập nghề nghiệp*/}
          <Text style={styles.titles}>Nhập nghề nghiệp</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập nghề nghiệp"
            value={formData.job}
            onChangeText={(text) => handleInputChange("job", text)}
          />

          {/* Password Input */}
          <Text style={styles.titles}>Nhập mật khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập Mật khẩu"
            value={formData.password}
            onChangeText={(text) => handleInputChange("password", text)}
            secureTextEntry
          />

          {/* Confirm Password Input */}
          <Text style={styles.titles}>Nhập lại mật khẩu</Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập lại Mật khẩu"
            value={formData.rePassword}
            onChangeText={(text) => handleInputChange("rePassword", text)}
            secureTextEntry
          />

          {/* Register Button */}
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Đăng ký</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  textHeader: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 40,
  },
  titles: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
    textAlign: "left",
    marginBottom: 5,
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
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    paddingBottom: 30, // Add bottom padding to prevent content from being hidden by the keyboard
  },
});
