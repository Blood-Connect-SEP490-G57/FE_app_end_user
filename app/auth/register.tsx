import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import { Text } from "@/components/ui/text";
import { Input, InputField } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import {
  Radio,
  RadioGroup,
  RadioIcon,
  RadioIndicator,
  RadioLabel,
} from "@/components/ui/radio";
import { ChevronDownIcon, CircleIcon } from "@/components/ui/icon";
import {
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
} from "@/components/ui/select";
import { useRouter } from "expo-router";

export default function Register() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <KeyboardAvoidingView behavior="padding" style={styles.keyboardAvoidingView}>
          {/* Personal Info */}
          <Card size="lg" variant="outline" style={styles.card} className="bg-white">
            <Heading size="md" style={styles.sectionHeading}>Thông tin cá nhân</Heading>
            
            {/* Full Name */}
            <Text size="sm" style={styles.inputLabel}>Họ và tên</Text>
            <Input variant="outline" size="md" style={styles.input}>
              <InputField placeholder="Nhập họ và tên" />
            </Input>

            {/* Date of Birth */}
            <Text size="sm" style={styles.inputLabel}>Ngày sinh</Text>
            <Input variant="outline" size="md" style={styles.input}>
              <InputField placeholder="Nhập ngày sinh" />
            </Input>

            {/* Gender */}
            <Text size="sm" style={styles.inputLabel}>Giới tính</Text>
            <RadioGroup style={styles.radioGroup}>
              <Radio value="male" size="md">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Nam</RadioLabel>
              </Radio>
              <Radio value="female" size="md">
                <RadioIndicator>
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Nữ</RadioLabel>
              </Radio>
            </RadioGroup>

            {/* Blood Type */}
            {/* <Text size="sm" style={styles.inputLabel}>Nhóm máu</Text>
            <Select>
              <SelectTrigger variant="outline" size="lg" style={styles.selectTrigger}>
                <SelectInput placeholder="Chọn nhóm máu" />
                <SelectIcon as={ChevronDownIcon} />
              </SelectTrigger>
              <SelectPortal>
                <SelectBackdrop />
                <SelectContent>
                  <SelectDragIndicatorWrapper>
                    <SelectDragIndicator />
                  </SelectDragIndicatorWrapper>
                  <SelectItem label="A" value="A" />
                  <SelectItem label="B" value="B" />
                  <SelectItem label="AB" value="AB" />
                  <SelectItem label="O" value="O" />
                </SelectContent>
              </SelectPortal>
            </Select> */}
             {/* Phone */}
             <Text size="sm" style={styles.inputLabel}>Số điện thoại</Text>
            <Input variant="outline" size="md" style={styles.input}>
              <InputField placeholder="Nhập số điện thoại" />
            </Input>
          </Card>

          {/* Password Info */}
          <Card size="lg" variant="outline" style={styles.card} className="bg-white">
            <Heading size="md" style={styles.sectionHeading}>Mật khẩu</Heading>

            {/* Password */}
            <Text size="sm" style={styles.inputLabel}>Mật khẩu</Text>
            <Input variant="outline" size="md" style={styles.input}>
              <InputField placeholder="Nhập mật khẩu" />
            </Input>

            {/* Confirm Password */}
            <Text size="sm" style={styles.inputLabel}>Xác nhận mật khẩu</Text>
            <Input variant="outline" size="md" style={styles.input}>
              <InputField placeholder="Nhập lại mật khẩu" />
            </Input>
          </Card>

          {/* Submit Button */}
          <Button
            size="md"
            variant="solid"
            action="negative"
            onPress={() => router.push("/auth/otp")}
            style={styles.submitButton}
          >
            <ButtonText>Đăng ký</ButtonText>
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  scrollView: {
    paddingBottom: 20,
  },
  keyboardAvoidingView: {
    paddingHorizontal: 10,
  },
  headerText: {
    textAlign: "center",
    marginBottom: 20,
  },
  card: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  sectionHeading: {
    marginBottom: 10,
  },
  inputLabel: {
    marginBottom: 5,
  },
  input: {
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: "row",
    marginBottom: 10,
  },
  selectTrigger: {
    marginBottom: 10,
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 10,
  },
});
