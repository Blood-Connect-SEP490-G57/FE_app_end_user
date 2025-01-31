import { View, ScrollView, SafeAreaView } from "react-native";
import { Text } from "@/components/ui/text";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlErrorIcon,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
} from "@/components/ui/form-control";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import { VStack } from "@/components/ui/vstack";
import React from "react";
import { AlertCircleIcon } from "@/components/ui/icon";
import { Card } from "@/components/ui/card";
export default function Contact() {
  return (
    <View className="w-full rounded-md border border-background-200 p-4">
      <Text className="text-2xl font-bold text-center">
        Gửi lời nhắn cho chúng tôi
      </Text>
      <Text className="text-sm text-gray-500">
        Nếu bạn có bất kỳ thắc mắc nào liên quan đến các hoạt động hiến máu tình
        nguyện, xin vui lòng liên hệ với chúng tôi qua địa chỉ
        email gmv@intelin.vn hoặc gửi thông tin cho chúng tôi theo mẫu bên dưới:
      </Text>
      <Card className="p-4 mt-4">
        <FormControl size="md">
          <FormControlLabel>
            <FormControlLabelText>Họ tên</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1" size="md">
            <InputField type="text" placeholder="Họ tên" />
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Email</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1" size="md">
            <InputField type="text" placeholder="Email" />
          </Input>

          <FormControlLabel>
            <FormControlLabelText>Số điện thoại</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1" size="md">
            <InputField type="text" placeholder="Số điện thoại" />
          </Input>

          <FormControlLabel>
            <FormControlLabelText>Nội dung</FormControlLabelText>
          </FormControlLabel>
          <Input className="my-1" size="md">
            <InputField type="text" placeholder="Nội dung" />
          </Input>
        </FormControl>
        <Button className="w-fit self-end mt-4" size="sm">
          <ButtonText>Gửi</ButtonText>
        </Button>
      </Card>
    </View>
  );
}
