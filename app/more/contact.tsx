import { View, ScrollView, SafeAreaView } from "react-native";
import { Text } from "@/components/ui/text";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField } from "@/components/ui/input";
import React from "react";
import { Card } from "@/components/ui/card";
import BackButton from "@/components/ui/backbtn";
import { Heading } from "@/components/ui/heading";
export default function Contact() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-4 flex-row items-center bg-gray-100 ">
          <BackButton />
          <Heading className="ml-4 text-lg font-semibold">Liên hệ</Heading>
        </View>
        <ScrollView>
          <View className="w-full rounded-md bg-white p-4">
            <Text className="text-2xl font-bold text-center">
              Gửi lời nhắn cho chúng tôi
            </Text>
            <Text className="text-sm text-gray-500">
              Nếu bạn có bất kỳ thắc mắc nào liên quan đến các hoạt động hiến
              máu tình nguyện, xin vui lòng liên hệ với chúng tôi qua địa chỉ
              email: gmv@intelin.vn hoặc gửi thông tin cho chúng tôi theo mẫu
              bên dưới:
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
                <Input className="my-1 h-40" size="md">
                  <InputField
                    multiline={true}
                    type="text"
                    placeholder="Nội dung"
                  />
                </Input>
              </FormControl>

              <Button className="mt-4 bg-red-500" size="lg">
                <ButtonText>Gửi</ButtonText>
              </Button>
            </Card>
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
