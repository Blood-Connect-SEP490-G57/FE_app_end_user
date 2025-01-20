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
    <SafeAreaView>
      <ScrollView>
        <KeyboardAvoidingView behavior="padding" style={{ padding: 10 }}>
          <Text
            size="xl"
            bold
            style={{ textAlign: "center", marginBottom: 10 }}
          >
            Đăng ký
          </Text>
          <Card size="lg" variant="outline" className="m-3">
            <Heading size="md" className="mb-1">
              Thông tin cá nhân
            </Heading>
            {/* CCCD */}
            <Text size="sm">Nhập CCCD/CMT</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập CCCD/CMT" />
            </Input>

            {/* Full Name */}
            <Text size="sm">Họ và tên</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập họ và tên" />
            </Input>

            {/* DOB */}
            <Text size="sm">Ngày sinh</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập ngày sinh" />
            </Input>

            {/* Gioi tinh */}
            <Text size="sm">Giới tính</Text>

            <RadioGroup style={{ flexDirection: "row", marginBottom: 10 }}>
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

            {/* blood type */}
            <Text size="sm">Nhóm máu</Text>

            <Select>
              <SelectTrigger variant="outline" size="lg">
                <SelectInput placeholder="Chọn nhóm máu" />
                <SelectIcon className="mr-3" as={ChevronDownIcon} />
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
            </Select>
          </Card>

          <Card size="lg" variant="outline" className="m-3">
            <Heading size="md" className="mb-1">
              Thông tin liên hệ
            </Heading>
            {/* Email */}
            <Text size="sm">Email</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập email" />
            </Input>
            
            {/* Phone */}
            <Text size="sm">Số điện thoại</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập số điện thoại" />
            </Input>

            {/* Cơ quan/ Trường */}
            <Text size="sm">Cơ quan/ Trường</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập cơ quan/ trường" /> 
            </Input>
            {/* mã sv / quân nhân  */}
            <Text size="sm">Mã sinh viên/ quân nhân</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập mã sinh viên/ quân nhân" />
            </Input>

            {/* Nghề nghiệp */}
            <Text size="sm">Nghề nghiệp</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập nghề nghiệp" />
            </Input>

          </Card>
          <Card size="lg" variant="outline" className="m-3">
            <Heading size="md" className="mb-1">
              Mật khẩu
            </Heading>
            {/* Password */}
            <Text size="sm">Mật khẩu</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập mật khẩu" />
            </Input>

            {/* Confirm Password */}
            <Text size="sm">Xác nhận mật khẩu</Text>
            <Input
              variant="outline"
              size="md"
              className="mb-2"
              style={{ marginBottom: 10 }}
            >
              <InputField placeholder="Nhập lại mật khẩu" />
            </Input>
          </Card>

          <Button
            size="md"
            variant="solid"
            action="negative"
            onPress={() => router.push("/auth/otp")}
            style={{ marginBottom: 10 }}
          >
            <ButtonText>Đăng ký</ButtonText>
          </Button>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
}
